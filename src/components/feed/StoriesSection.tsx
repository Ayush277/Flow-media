"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X, Image as ImageIcon, Type, ChevronLeft, ChevronRight } from "lucide-react";

// Types
type StoryType = 'image' | 'text';

interface Story {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string; // Image URL or Text content
  type: StoryType;
  bgColor?: 'black' | 'white';
  timestamp: string;
}

interface UserWithStories {
  userId: string;
  userName: string;
  userAvatar: string;
  stories: Story[];
  isCurrentUser?: boolean;
}

// Mock Data
const INITIAL_STORIES: UserWithStories[] = [
  {
    userId: "currentUser",
    userName: "You",
    userAvatar: "https://github.com/shadcn.png",
    isCurrentUser: true,
    stories: []
  },
  {
    userId: "user1",
    userName: "Sarah Chen",
    userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    stories: [
      {
        id: "s1",
        userId: "user1",
        userName: "Sarah Chen",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        content: "Just shipped the new feature! 🚀\n\nProductivity is at an all time high today.",
        type: "text",
        bgColor: "black",
        timestamp: "2h ago"
      },
       {
        id: "s2",
        userId: "user1",
        userName: "Sarah Chen",
        userAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
        content: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop",
        type: "image",
        timestamp: "1h ago"
      }
    ]
  },
  {
    userId: "user2",
    userName: "Alex Design",
    userAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
    stories: [
      {
        id: "s3",
        userId: "user2",
        userName: "Alex Design",
        userAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop",
        content: "Working on the new design system. What do you think?",
        type: "text",
        bgColor: "white",
        timestamp: "5h ago"
      }
    ]
  }
];

export function StoriesSection() {
  const [stories, setStories] = useState<UserWithStories[]>(INITIAL_STORIES);
  const [selectedUserIndex, setSelectedUserIndex] = useState<number | null>(null);
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);
  const [isCreating, setIsCreating] = useState(false);

  // Creation State
  const [createType, setCreateType] = useState<StoryType>('text');
  const [textContent, setTextContent] = useState("");
  const [textBg, setTextBg] = useState<'black' | 'white'>('black');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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
      // Move to next user if available
      if (selectedUserIndex < stories.length - 1) {
        // Skip current user if they have no stories (shouldn't happen in view mode usually)
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
      // Move to prev user
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

  const handlePostStory = () => {
    const newStory: Story = {
      id: Math.random().toString(36).substr(2, 9),
      userId: "currentUser",
      userName: "You",
      userAvatar: "https://github.com/shadcn.png",
      content: createType === 'text' ? textContent : imagePreview!,
      type: createType,
      bgColor: createType === 'text' ? textBg : undefined,
      timestamp: "Just now"
    };

    const updatedStories = [...stories];
    updatedStories[0].stories = [newStory, ...updatedStories[0].stories];
    setStories(updatedStories);
    setIsCreating(false);
    resetCreation();
  };

  const resetCreation = () => {
    setTextContent("");
    setTextBg("black");
    setImageFile(null);
    setImagePreview(null);
    setCreateType("text");
  };

  const currentUser = stories[selectedUserIndex || 0];
  const currentStory = currentUser?.stories[currentStoryIndex];

  return (
    <div className="w-full py-4 overflow-x-auto no-scrollbar">
      <div className="flex gap-4 px-4 min-w-max">
        {/* Add Story / My Story */}
        <div 
          className="flex flex-col items-center gap-2 cursor-pointer group"
          onClick={() => handleUserClick(0)}
        >
          <div className={`relative w-16 h-16 rounded-full p-[2px] ${stories[0].stories.length > 0 ? 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600' : 'border-2 border-dashed border-white/20'}`}>
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-background relative">
              <img 
                src={stories[0].userAvatar} 
                alt="You" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
              />
              {stories[0].stories.length === 0 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Plus className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
            {stories[0].stories.length > 0 && (
                 <div className="absolute bottom-0 right-0 w-5 h-5 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                    <Plus className="w-3 h-3 text-white" />
                 </div>
            )}
          </div>
          <span className="text-xs text-muted-foreground font-medium">Your Story</span>
        </div>

        {/* Other Users Stories */}
        {stories.slice(1).map((user, index) => (
          <div 
            key={user.userId}
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() => handleUserClick(index + 1)}
          >
            <div className="relative w-16 h-16 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 to-fuchsia-600">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-background">
                <img 
                  src={user.userAvatar} 
                  alt={user.userName} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
                />
              </div>
            </div>
            <span className="text-xs text-muted-foreground font-medium max-w-[70px] truncate">{user.userName}</span>
          </div>
        ))}
      </div>

      {/* Create Story Modal */}
      <AnimatePresence>
        {isCreating && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          >
            <div className="w-full max-w-md bg-background rounded-2xl overflow-hidden border border-white/10 relative h-[80vh] flex flex-col">
              {/* Header */}
              <div className="p-4 flex items-center justify-between border-b border-white/10">
                <h3 className="font-semibold">Add to Story</h3>
                <button onClick={() => setIsCreating(false)} className="p-2 hover:bg-white/10 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content Area */}
              <div className="flex-1 relative flex items-center justify-center bg-neutral-900 overflow-hidden">
                {createType === 'text' ? (
                  <div 
                    className={`w-full h-full flex items-center justify-center p-8 text-center ${textBg === 'white' ? 'bg-white text-black' : 'bg-black text-white'}`}
                  >
                    <textarea
                      value={textContent}
                      onChange={(e) => setTextContent(e.target.value)}
                      placeholder="Type something..."
                      className="w-full h-full bg-transparent border-none resize-none focus:ring-0 text-2xl font-bold text-center placeholder:text-gray-500/50"
                      autoFocus
                    />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-black">
                    {imagePreview ? (
                      <img src={imagePreview} alt="Preview" className="max-w-full max-h-full object-contain" />
                    ) : (
                      <label className="flex flex-col items-center gap-4 cursor-pointer p-8 rounded-xl hover:bg-white/5 transition-colors">
                        <ImageIcon className="w-12 h-12 text-muted-foreground" />
                        <span className="text-muted-foreground">Upload Photo</span>
                        <input type="file" accept="image/*" className="hidden" onChange={handleImageUpload} />
                      </label>
                    )}
                  </div>
                )}
              </div>

              {/* Controls */}
              <div className="p-4 border-t border-white/10 space-y-4">
                <div className="flex gap-2 justify-center">
                    <button 
                        onClick={() => setCreateType('text')}
                        className={`p-2 rounded-lg flex-1 flex items-center justify-center gap-2 ${createType === 'text' ? 'bg-primary text-white' : 'bg-white/5'}`}
                    >
                        <Type className="w-4 h-4" /> Text
                    </button>
                    <button 
                        onClick={() => setCreateType('image')}
                        className={`p-2 rounded-lg flex-1 flex items-center justify-center gap-2 ${createType === 'image' ? 'bg-primary text-white' : 'bg-white/5'}`}
                    >
                        <ImageIcon className="w-4 h-4" /> Image
                    </button>
                </div>

                {createType === 'text' && (
                    <div className="flex gap-2 justify-center">
                        <button 
                            onClick={() => setTextBg('black')}
                            className={`w-8 h-8 rounded-full bg-black border border-white/20 ${textBg === 'black' ? 'ring-2 ring-primary' : ''}`}
                        />
                        <button 
                            onClick={() => setTextBg('white')}
                            className={`w-8 h-8 rounded-full bg-white border border-white/20 ${textBg === 'white' ? 'ring-2 ring-primary' : ''}`}
                        />
                    </div>
                )}

                <button 
                    onClick={handlePostStory}
                    disabled={createType === 'text' ? !textContent : !imagePreview}
                    className="w-full py-3 bg-primary text-white rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Share to Story
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Story Viewer Modal */}
      <AnimatePresence>
        {selectedUserIndex !== null && currentStory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          >
            {/* Progress Bar */}
            <div className="absolute top-4 left-0 right-0 z-20 flex gap-1 px-4">
                {currentUser.stories.map((story, idx) => (
                    <div key={story.id} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: idx < currentStoryIndex ? "100%" : idx === currentStoryIndex ? "100%" : "0%" }}
                            transition={{ duration: idx === currentStoryIndex ? 5 : 0, ease: "linear" }}
                            onAnimationComplete={() => {
                                if (idx === currentStoryIndex) handleNextStory();
                            }}
                            className="h-full bg-white"
                        />
                    </div>
                ))}
            </div>

            {/* Header */}
            <div className="absolute top-8 left-0 right-0 z-20 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <img src={currentUser.userAvatar} alt={currentUser.userName} className="w-10 h-10 rounded-full border border-white/20" />
                    <div>
                        <p className="font-semibold text-white">{currentUser.userName}</p>
                        <p className="text-xs text-white/60">{currentStory.timestamp}</p>
                    </div>
                </div>
                <button onClick={closeViewer} className="p-2 hover:bg-white/10 rounded-full text-white">
                    <X className="w-6 h-6" />
                </button>
            </div>

            {/* Navigation Areas */}
            <div className="absolute inset-0 z-10 flex">
                <div className="w-1/3 h-full" onClick={handlePrevStory} />
                <div className="w-1/3 h-full" onClick={handleNextStory} />
                <div className="w-1/3 h-full" onClick={handleNextStory} />
            </div>

            {/* Content */}
            <div className="w-full h-full flex items-center justify-center">
                {currentStory.type === 'text' ? (
                    <div className={`w-full h-full flex items-center justify-center p-8 text-center ${currentStory.bgColor === 'white' ? 'bg-white text-black' : 'bg-black text-white'}`}>
                        <p className="text-2xl md:text-4xl font-bold whitespace-pre-wrap">{currentStory.content}</p>
                    </div>
                ) : (
                    <img src={currentStory.content} alt="Story" className="max-w-full max-h-full object-contain" />
                )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
