"use client";

import { useProfile } from "@/hooks/useProfile";
import { createClient } from "@/lib/supabase/client";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, Camera, Code2, Edit3, Flame, Github, Link as LinkIcon, LogOut, MapPin, Settings, Shield, Sparkles, Terminal, User, X, Zap } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Frame Definitions
const FRAMES = [
    {
        id: 'default',
        name: 'Flow Gradient',
        class: 'bg-gradient-to-r from-primary via-purple-500 to-blue-500',
        icon: Zap,
        color: 'text-blue-400'
    },
    {
        id: 'gold',
        name: 'Golden Legend',
        class: 'bg-gradient-to-tr from-yellow-300 via-yellow-500 to-yellow-700',
        icon: Sparkles,
        color: 'text-yellow-400'
    },
    {
        id: 'fire',
        name: 'Dragon Fire',
        class: 'bg-gradient-to-t from-red-600 via-orange-500 to-yellow-400',
        icon: Flame,
        color: 'text-orange-500'
    },
    {
        id: 'neon',
        name: 'Cyber Neon',
        class: 'bg-gradient-to-r from-green-400 to-emerald-600 shadow-[0_0_20px_rgba(52,211,153,0.5)]',
        icon: Code2,
        color: 'text-green-400'
    }
];

export function ProfileHeader() {
    const router = useRouter();
    const supabase = createClient();
    const { profile, loading, updateProfile } = useProfile();

    const [isEditing, setIsEditing] = useState(false);
    const [activeTab, setActiveTab] = useState<'profile' | 'frames' | 'account'>('profile');

    // Local state for editing
    const [bio, setBio] = useState("");
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [website, setWebsite] = useState("");
    const [selectedFrame, setSelectedFrame] = useState('default');

    // Sync profile data when loaded
    useEffect(() => {
        if (profile) {
            setName(profile.full_name || "User");
            setBio(profile.bio || "Ready to flow.");
            setLocation(profile.location || "Earth");
            setWebsite(profile.website || "");
            setSelectedFrame(profile.selected_frame || 'default');
        }
    }, [profile]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        router.push("/login");
    };

    const handleSaveProfile = async () => {
        await updateProfile({
            full_name: name,
            bio,
            location,
            website,
            selected_frame: selectedFrame
        });
        setIsEditing(false);
    };

    const currentFrame = FRAMES.find(f => f.id === selectedFrame) || FRAMES[0];

    if (loading) return <div className="h-64 w-full animate-pulse bg-white/5 rounded-2xl mb-8" />;

    return (
        <div className="relative mb-8">
            {/* Cover Image */}
            <div className="h-48 w-full bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-2xl overflow-hidden relative group">
                <div className="absolute inset-0 bg-black/10" />
                <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70 text-white">
                    <Camera className="h-5 w-5" />
                </button>
            </div>

            <div className="px-6 relative">
                <div className="flex flex-col md:flex-row items-start md:items-end gap-6 -mt-12">
                    {/* Avatar with Customizable Frame */}
                    <div className="relative group">
                        {/* Animated Border/Frame */}
                        <div className={`absolute -inset-1.5 rounded-full opacity-75 blur animate-pulse group-hover:opacity-100 transition-opacity duration-500 ${currentFrame.class}`} />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="h-32 w-32 rounded-full bg-black border-4 border-black p-1 relative z-10 overflow-hidden"
                        >
                            <div className="h-full w-full rounded-full bg-gradient-to-br from-primary to-purple-600 flex items-center justify-center text-4xl font-bold text-white relative group/avatar cursor-pointer">
                                {name[0]}
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/avatar:opacity-100 transition-opacity">
                                    <Camera className="h-6 w-6 text-white" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Status Indicator */}
                        <div className="absolute bottom-2 right-2 h-6 w-6 rounded-full bg-green-500 border-4 border-black z-20" title="Online" />
                    </div>

                    {/* Info */}
                    <div className="flex-1 mb-2 w-full">
                        <div className="flex items-center justify-between">
                            <div>
                                <h1 className="text-2xl font-bold text-white flex items-center gap-2">
                                    {name}
                                    <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-xs border border-primary/20">PRO</span>
                                </h1>
                                <p className="text-muted-foreground">@{profile?.username || 'user'}</p>
                            </div>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        setActiveTab('profile');
                                        setIsEditing(true);
                                    }}
                                    className="px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors font-medium text-sm flex items-center gap-2"
                                >
                                    <Edit3 className="h-4 w-4" />
                                    Edit Profile
                                </button>
                                <button
                                    onClick={() => {
                                        setActiveTab('account');
                                        setIsEditing(true);
                                    }}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors border border-white/10"
                                >
                                    <Settings className="h-5 w-5 text-muted-foreground" />
                                </button>
                            </div>
                        </div>

                        <p className="mt-3 text-gray-300 max-w-2xl leading-relaxed">
                            {bio}
                        </p>

                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                <span>{location}</span>
                            </div>
                            {website && (
                                <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
                                    <LinkIcon className="h-4 w-4" />
                                    <span>{website}</span>
                                </div>
                            )}
                            <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                <span>Joined December 2025</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Integrations & Stats Row */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Platform Streaks */}
                    <div className="bg-card/30 border border-white/5 rounded-2xl p-4 flex items-center gap-4 overflow-x-auto no-scrollbar">
                        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-black/20 border border-white/5 min-w-fit">
                            <Github className="h-5 w-5 text-white" />
                            <div>
                                <p className="text-xs text-muted-foreground">GitHub Streak</p>
                                <p className="font-bold text-green-400">128 Days 🔥</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-black/20 border border-white/5 min-w-fit">
                            <Code2 className="h-5 w-5 text-orange-500" />
                            <div>
                                <p className="text-xs text-muted-foreground">LeetCode</p>
                                <p className="font-bold text-orange-400">450 Solved</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-black/20 border border-white/5 min-w-fit">
                            <Terminal className="h-5 w-5 text-blue-500" />
                            <div>
                                <p className="text-xs text-muted-foreground">WakaTime</p>
                                <p className="font-bold text-blue-400">45h / week</p>
                            </div>
                        </div>
                    </div>

                    {/* Flow Stats */}
                    <div className="bg-card/30 border border-white/5 rounded-2xl p-4 flex items-center justify-around">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-white">{profile?.hours_focused || 0}</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Hours Focused</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-white">{profile?.flows_done || 0}</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Flows Done</p>
                        </div>
                        <div className="w-px h-8 bg-white/10" />
                        <div className="text-center">
                            <p className="text-2xl font-bold text-white">Top 1%</p>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider">Rank</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Unified Settings Modal */}
            <AnimatePresence>
                {isEditing && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setIsEditing(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-card border border-white/10 rounded-2xl w-full max-w-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden max-h-[80vh]"
                        >
                            {/* Sidebar */}
                            <div className="w-full md:w-64 bg-black/20 border-r border-white/5 p-4 flex flex-col gap-2">
                                <h3 className="font-bold text-lg px-2 mb-2">Settings</h3>
                                <button
                                    onClick={() => setActiveTab('profile')}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-primary text-white' : 'hover:bg-white/5 text-muted-foreground'}`}
                                >
                                    <User className="h-4 w-4" /> Edit Profile
                                </button>
                                <button
                                    onClick={() => setActiveTab('frames')}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'frames' ? 'bg-primary text-white' : 'hover:bg-white/5 text-muted-foreground'}`}
                                >
                                    <Sparkles className="h-4 w-4" /> Frames & Decor
                                </button>
                                <button
                                    onClick={() => setActiveTab('account')}
                                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'account' ? 'bg-primary text-white' : 'hover:bg-white/5 text-muted-foreground'}`}
                                >
                                    <Shield className="h-4 w-4" /> Account
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 p-6 overflow-y-auto">
                                <div className="flex justify-between items-center mb-6">
                                    <h3 className="text-xl font-bold">
                                        {activeTab === 'profile' && 'Edit Profile'}
                                        {activeTab === 'frames' && 'Customize Appearance'}
                                        {activeTab === 'account' && 'Account Settings'}
                                    </h3>
                                    <button onClick={() => setIsEditing(false)} className="p-2 hover:bg-white/10 rounded-full">
                                        <X className="h-5 w-5" />
                                    </button>
                                </div>

                                {activeTab === 'profile' && (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="text-sm text-muted-foreground mb-1 block">Display Name</label>
                                            <input
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary/50 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="text-sm text-muted-foreground mb-1 block">Bio</label>
                                            <textarea
                                                value={bio}
                                                onChange={(e) => setBio(e.target.value)}
                                                className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary/50 outline-none h-24 resize-none"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="text-sm text-muted-foreground mb-1 block">Location</label>
                                                <input
                                                    value={location}
                                                    onChange={(e) => setLocation(e.target.value)}
                                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary/50 outline-none"
                                                />
                                            </div>
                                            <div>
                                                <label className="text-sm text-muted-foreground mb-1 block">Website</label>
                                                <input
                                                    value={website}
                                                    onChange={(e) => setWebsite(e.target.value)}
                                                    className="w-full bg-black/20 border border-white/10 rounded-lg p-3 focus:ring-2 focus:ring-primary/50 outline-none"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleSaveProfile}
                                            className="w-full py-3 bg-primary text-white rounded-xl font-bold mt-4 hover:bg-primary/90 transition-colors"
                                        >
                                            Save Changes
                                        </button>
                                    </div>
                                )}

                                {activeTab === 'frames' && (
                                    <div className="grid grid-cols-2 gap-4">
                                        {FRAMES.map((frame) => (
                                            <div
                                                key={frame.id}
                                                onClick={() => setSelectedFrame(frame.id)}
                                                className={`cursor-pointer rounded-xl border p-4 flex flex-col items-center gap-3 transition-all ${selectedFrame === frame.id ? 'bg-primary/10 border-primary' : 'bg-black/20 border-white/5 hover:border-white/20'}`}
                                            >
                                                <div className="relative">
                                                    <div className={`absolute -inset-1 rounded-full opacity-75 blur ${frame.class}`} />
                                                    <div className="h-16 w-16 rounded-full bg-black border-2 border-black relative z-10 flex items-center justify-center">
                                                        <frame.icon className={`h-6 w-6 ${frame.color}`} />
                                                    </div>
                                                </div>
                                                <div className="text-center">
                                                    <p className="font-bold text-sm">{frame.name}</p>
                                                    <p className="text-xs text-muted-foreground">Unlocked</p>
                                                </div>
                                            </div>
                                        ))}
                                        <button
                                            onClick={handleSaveProfile}
                                            className="col-span-2 w-full py-3 bg-primary text-white rounded-xl font-bold mt-4 hover:bg-primary/90 transition-colors"
                                        >
                                            Apply Frame
                                        </button>
                                    </div>
                                )}

                                {activeTab === 'account' && (
                                    <div className="space-y-6">
                                        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                            <h4 className="font-bold text-red-400 mb-2">Danger Zone</h4>
                                            <p className="text-sm text-muted-foreground mb-4">
                                                Sign out of your account on this device.
                                            </p>
                                            <button
                                                onClick={handleSignOut}
                                                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500 text-white font-medium hover:bg-red-600 transition-colors"
                                            >
                                                <LogOut className="h-4 w-4" />
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
