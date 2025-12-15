import { createClient } from '@/lib/supabase/client';
import { useEffect, useState } from 'react';

export interface Profile {
    id: string;
    username: string;
    full_name: string;
    avatar_url: string;
    bio: string;
    website: string;
    location: string;
    selected_frame: string;
    hours_focused: number;
    flows_done: number;
    rank_score: number;
}

export function useProfile() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const supabase = createClient();

    useEffect(() => {
        let channel: any;

        const fetchProfile = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser();

                if (user) {
                    const { data, error } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', user.id)
                        .single();

                    if (data) {
                        setProfile(data);

                        // Subscribe to real-time changes for this profile
                        channel = supabase
                            .channel(`profile-${user.id}`)
                            .on('postgres_changes',
                                {
                                    event: 'UPDATE',
                                    schema: 'public',
                                    table: 'profiles',
                                    filter: `id=eq.${user.id}`
                                },
                                (payload) => {
                                    setProfile(payload.new as Profile);
                                }
                            )
                            .subscribe();

                    } else if (error && error.code === 'PGRST116') {
                        // Profile doesn't exist, create one (fallback)
                        const newProfile = {
                            id: user.id,
                            username: user.email?.split('@')[0] || 'user',
                            full_name: 'New User',
                            avatar_url: '',
                            bio: '',
                            selected_frame: 'default',
                            hours_focused: 0,
                            flows_done: 0,
                            rank_score: 0
                        };
                        setProfile(newProfile as Profile);
                    }
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();

        return () => {
            if (channel) supabase.removeChannel(channel);
        };
    }, []);

    const updateProfile = async (updates: Partial<Profile>) => {
        if (!profile) return;

        // Optimistic update
        setProfile({ ...profile, ...updates });

        const { error } = await supabase
            .from('profiles')
            .update(updates)
            .eq('id', profile.id);

        if (error) {
            console.error('Error updating profile:', error);
            // Revert optimistic update if needed, typically by refetching
            // For now, we trust the real-time listener will eventually correct it or next fetch
        }
    };

    return { profile, loading, updateProfile };
}
