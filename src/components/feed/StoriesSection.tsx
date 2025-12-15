"use client";

import { createClient } from "@/lib/supabase/client";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, Upload, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

// Types
type StoryType = 'image' | 'text';

interface Story {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string; // Image URL or Text content
  type: StoryType;
  bgColor?: 'black' | 'white' | 'gradient';
  timestamp: string;
}

interface UserWithStories {
  userId: string;
  userName: string;
  userAvatar: string;
  stories: Story[];
  isCurrentUser?: boolean;
}

export function StoriesSection() {
  const [stories, setStories] = useState<UserWithStories[]>([]);
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isCreating, setIsCreating] = useState(false);
  const supabase = createClient();

  // Creation State
  const [createType, setCreateType] = useState<StoryType>('text');
  const [textContent, setTextContent] = useState("");
  const [textBg, setTextBg] = useState<'black' | 'white' | 'gradient'>('gradient');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const fetchStories = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data: storiesData, error } = await supabase
      .from('stories')
      .select(`
        *,
        profiles (full_name, username, avatar_url)
      `)
      .gt('expires_at', new Date().toISOString())
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Error fetching stories:", error);
      return;
    }

    const groupedStories: { [key: string]: UserWithStories } = {};

    // Current User Placeholder
    groupedStories[user.id] = {
      userId: user.id,
      userName: "You",
      userAvatar: user.user_metadata.avatar_url || "",
      stories: [],
      isCurrentUser: true
    };

    storiesData?.forEach((story: any) => {
      const userId = story.user_id;
      if (!groupedStories[userId]) {
        groupedStories[userId] = {
          userId: userId,
          userName: story.profiles?.full_name || "User",
          userAvatar: story.profiles?.avatar_url || "",
          stories: [],
          isCurrentUser: userId === user.id
        };
      }

      groupedStories[userId].stories.push({
        id: story.id,
        userId: userId,
        userName: story.profiles?.full_name || "User",
        userAvatar: story.profiles?.avatar_url || "",
        content: story.content || story.media_url,
        type: story.type,
        bgColor: story.background_color,
        timestamp: new Date(story.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
    });

    const storiesArray = Object.values(groupedStories).sort((a, b) => {
      if (a.isCurrentUser) return -1;
      if (b.isCurrentUser) return 1;
      return 0;
    });

    setStories(storiesArray);
  };

  useEffect(() => {
    fetchStories();

    // Subscribe to realtime stories
    const channel = supabase
      .channel('realtime_stories')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'stories' }, () => {
        fetchStories();
      })
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, []);

  const handleUserClick = (index: number) => {
    if (stories[index].isCurrentUser && stories[index].stories.length === 0) {
      setIsCreating(true);
    } else {
      setSelectedUserIndex(index);
      setCurrentStoryIndex(0);
    }
  };

  const handleNextStory = () => {
    if (selectedUserIndex === null) return;
    const currentUserStories = stories[selectedUserIndex].stories;
    if (currentStoryIndex < currentUserStories.length - 1) {
      setCurrentStoryIndex(prev => prev + 1);
    } else {
      // Next User
      if (selectedUserIndex < stories.length - 1) {
        let nextIndex = selectedUserIndex + 1;
        while (nextIndex < stories.length && stories[nextIndex].stories.length === 0) {
          nextIndex++;
        }
        if (nextIndex < stories.length) {
          setSelectedUserIndex(nextIndex);
          setCurrentStoryIndex(0);
        } else {
          closeViewer();
        }
      } else {
        closeViewer();
      }
    }
  };

  const handlePrevStory = () => {
    if (selectedUserIndex === null) return;
    if (currentStoryIndex > 0) {
      setCurrentStoryIndex(prev => prev - 1);
    } else {
      // Prev User
      if (selectedUserIndex > 0) {
        let prevIndex = selectedUserIndex - 1;
        while (prevIndex >= 0 && stories[prevIndex].stories.length === 0) {
          prevIndex--;
        }
        if (prevIndex >= 0) {
          setSelectedUserIndex(prevIndex);
          setCurrentStoryIndex(stories[prevIndex].stories.length - 1);
        } else {
          closeViewer();
        }
      } else {
        closeViewer();
      }
    }
  };

  const closeViewer = () => {
    setSelectedUserIndex(null);
    setCurrentStoryIndex(0);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePostStory = async () => {
    setIsUploading(true);
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error("Not authenticated");

      let mediaUrl = null;

      if (createType === 'image' && imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${user.id}/${Math.random()}.${fileExt}`;
        const { error: uploadError } = await supabase.storage
          .from('story-media')
          .upload(fileName, imageFile);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('story-media')
          .getPublicUrl(fileName);

        mediaUrl = publicUrl;
      }

      const { error } = await supabase
        .from('stories')
        .insert({
          user_id: user.id,
          type: createType,
          content: createType === 'text' ? textContent : null,
          media_url: mediaUrl,
          background_color: createType === 'text' ? textBg : null,
          expires_at: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
        });

      if (error) throw error;

      await fetchStories();
      setIsCreating(false);
      resetCreation();
      toast.success("Story added!");
    } catch (error) {
      console.error("Error posting story:", error);
      toast.error("Failed to post story");
    } finally {
      setIsUploading(false);
    }
  };

  const resetCreation = () => {
    setTextContent("");
    setTextBg("gradient");
    setImageFile(null);
    setImagePreview(null);
    setCreateType("text");
  };

  const currentUser = stories[selectedUserIndex || 0];
  const currentStory = currentUser?.stories[currentStoryIndex];

  if (stories.length === 0) return null;

  return (
    <div className="w-full py-6 overflow-x-auto no-scrollbar">
      <div className="flex gap-5 px-4 min-w-max">
        {/* Create Story Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => handleUserClick(0)}
        >
          <div className="relative w-[72px] h-[72px] rounded-full p-[3px] bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-500">
            {/* If user has no stories, show dashed border instead of gradient maybe? No, Instagram keeps gradient if you want to add more. Let's keep it distinctive. */}
            {stories[0].stories.length === 0 && (
              <div className="absolute inset-0 bg-background rounded-full m-[2px]" />
            )}

            <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-background relative z-10">
              {stories[0].userAvatar ? (
                <img
                  src={stories[0].userAvatar}
                  alt="You"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-xs font-bold">You</div>
              )}

              {stories[0].stories.length === 0 && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <Plus className="w-6 h-6 text-white drop-shadow-md" />
                </div>
              )}
            </div>

            {stories[0].stories.length > 0 && (
              <div className="absolute bottom-0 right-0 z-20 bg-blue-500 text-white p-0.5 rounded-full border-2 border-background">
                <Plus className="w-3 h-3" />
              </div>
            )}
          </div>
          <span className="text-xs text-white/90 font-medium">Your Flow</span>
        </motion.div>

        {/* Story Circles */}
        {stories.slice(1).map((user, index) => (
          <motion.div
            key={user.userId}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() => handleUserClick(index + 1)}
          >
            <div className="relative w-[72px] h-[72px] rounded-full p-[3px] bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600">
              <div className="w-full h-full rounded-full overflow-hidden border-[3px] border-background">
                {user.userAvatar ? (
                  <img
                    src={user.userAvatar}
                    alt={user.userName}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-xs font-bold">{user.userName[0]}</div>
                )}
              </div>
            </div>
            <span className="text-xs text-muted-foreground font-medium max-w-[70px] truncate">{user.userName}</span>
          </motion.div>
        ))}
      </div>

      {/* Modern Creation Modal */}
      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <div className="w-full max-w-2xl bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative flex flex-col h-[85vh]">

              {/* Top Bar */}
              <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20">
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
                  {createType === 'text' ? 'Create Note' : 'Upload Media'}
                </h2>
                <button onClick={() => { setIsCreating(false); resetCreation(); }} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Main Canvas */}
              <div className="flex-1 relative flex items-center justify-center bg-neutral-950/50">
                {createType === 'text' ? (
                  <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className={`w-full h-full flex items-center justify-center p-12 transition-colors duration-500 
                                ${textBg === 'white' ? 'bg-white text-black' :
                        textBg === 'gradient' ? 'bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white' :
                          'bg-neutral-900 text-white'}`}
                  >
                    <textarea
                      value={textContent}
                      onChange={(e) => setTextContent(e.target.value)}
                      placeholder="Type something..."
                      className="w-full h-full bg-transparent border-none resize-none focus:ring-0 text-3xl md:text-5xl font-bold text-center placeholder:text-current/50 outline-none"
                      autoFocus
                    />
                  </motion.div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-900 relative">
                    {imagePreview ? (
                      <div className="relative w-full h-full">
                        <img src={imagePreview} alt="Preview" className="w-full h-full object-contain" />
                        <button
                          onClick={() => { setImagePreview(null); setImageFile(null); }}
                          className="absolute top-4 right-4 bg-black/60 p-2 rounded-full hover:bg-black/80 text-white"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex flex-col items-center justify-center gap-4 cursor-pointer p-12 rounded-3xl border-2 border-dashed border-white/10 hover:border-white/30 hover:bg-white/5 transition-all w-3/4 aspect-square max-h-[400px]"
                      >
                        <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center">
                          <Upload className="w-10 h-10 text-primary" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-bold">Upload Photo</h3>
                          <p className="text-sm text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
                        </div>
                        <input
                          type="file"
                          ref={fileInputRef}
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageUpload}
                        />
                      </motion.label>
                    )}
                  </div>
                )}
              </div>

              {/* Bottom Controls */}
              <div className="p-6 bg-neutral-900 border-t border-white/5 flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 p-1 bg-black/40 rounded-xl">
                    <button
                      onClick={() => setCreateType('text')}
                      className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${createType === 'text' ? 'bg-white text-black shadow-lg' : 'text-muted-foreground hover:text-white'}`}
                    >
                      Text
                    </button>
                    <button
                      onClick={() => setCreateType('image')}
                      className={`px-6 py-2 rounded-lg text-sm font-semibold transition-all ${createType === 'image' ? 'bg-white text-black shadow-lg' : 'text-muted-foreground hover:text-white'}`}
                    >
                      Image
                    </button>
                  </div>

                  {createType === 'text' && (
                    <div className="flex gap-3">
                      {['gradient', 'black', 'white'].map((bg) => (
                        <button
                          key={bg}
                          onClick={() => setTextBg(bg as any)}
                          className={`w-8 h-8 rounded-full border-2 transition-all ${textBg === bg ? 'border-primary ring-2 ring-primary/30' : 'border-white/20'}`}
                          style={{
                            background: bg === 'gradient' ? 'linear-gradient(to bottom right, #6366f1, #a855f7, #ec4899)' : bg
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <button
                  onClick={handlePostStory}
                  disabled={(createType === 'text' ? !textContent : !imagePreview) || isUploading}
                  className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg shadow-primary/25"
                >
                  {isUploading ? "Sharing to Flow..." : "Share Now"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Immersive Story Viewer */}
      <AnimatePresence>
        {selectedUserIndex !== null && currentStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black"
          >
            {/* Story Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              {currentStory.type === 'text' ? (
                <div
                  className={`w-full h-full flex items-center justify-center p-8 text-center`}
                  style={{
                    background: currentStory.bgColor === 'gradient'
                      ? 'linear-gradient(to bottom right, #6366f1, #a855f7, #ec4899)'
                      : currentStory.bgColor === 'white' ? 'white' : 'black',
                    color: currentStory.bgColor === 'white' ? 'black' : 'white'
                  }}
                >
                  <p className="text-3xl md:text-5xl font-bold whitespace-pre-wrap max-w-4xl leading-tight">
                    {currentStory.content}
                  </p>
                </div>
              ) : (
                <img src={currentStory.content} className="w-full h-full object-contain" alt="Story" />
              )}
            </div>

            {/* Overlays */}
            <div className="absolute inset-x-0 top-0 pt-4 px-4 bg-gradient-to-b from-black/60 to-transparent pb-24 z-20">
              {/* Progress Bar */}
              <div className="flex gap-1.5 mb-4">
                {currentUser.stories.map((story, idx) => (
                  <div key={story.id} className="h-0.5 flex-1 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: idx < currentStoryIndex ? "100%" : idx === currentStoryIndex ? "100%" : "0%" }}
                      transition={{ duration: idx === currentStoryIndex ? 5 : 0, ease: "linear" }}
                      onAnimationComplete={() => {
                        if (idx === currentStoryIndex) handleNextStory();
                      }}
                      className="h-full bg-white shadow-[0_0_10px_white]"
                    />
                  </div>
                ))}
              </div>

              {/* Header */}
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {currentUser.userAvatar ? (
                    <img src={currentUser.userAvatar} className="w-10 h-10 rounded-full border border-white/20" />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold">{currentUser.userName[0]}</div>
                  )}
                  <div>
                    <p className="font-bold text-white text-sm">{currentUser.userName}</p>
                    <p className="text-xs text-white/60">{currentStory.timestamp}</p>
                  </div>
                </div>
                <button onClick={closeViewer} className="p-2 hover:bg-white/10 rounded-full">
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Navigation Zones */}
            <div className="absolute inset-0 z-10 grid grid-cols-[1fr_2fr_1fr]">
              <div onClick={handlePrevStory} className="h-full" />
              <div onClick={handleNextStory} className="h-full" />
              <div onClick={handleNextStory} className="h-full" />
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
