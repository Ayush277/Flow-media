import { createClient } from '@/lib/supabase/client';
import { useCallback, useEffect, useState } from 'react';

export function useFollow(targetUserId: string, currentUserId?: string) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const supabase = createClient();

    // Check status
    useEffect(() => {
        if (!currentUserId || !targetUserId || currentUserId === targetUserId) return;

        const checkFollow = async () => {
            const { data } = await supabase
                .from('follows')
                .select('*')
                .eq('follower_id', currentUserId)
                .eq('following_id', targetUserId)
                .single();

            if (data) setIsFollowing(true);
        };

        checkFollow();
    }, [currentUserId, targetUserId]);

    const toggleFollow = useCallback(async () => {
        if (!currentUserId || !targetUserId || isLoading) return;

        setIsLoading(true);
        // Optimistic
        const previousState = isFollowing;
        setIsFollowing(!previousState);

        try {
            if (previousState) {
                // Unfollow
                const { error } = await supabase
                    .from('follows')
                    .delete()
                    .eq('follower_id', currentUserId)
                    .eq('following_id', targetUserId);
                if (error) throw error;
            } else {
                // Follow
                const { error } = await supabase
                    .from('follows')
                    .insert({
                        follower_id: currentUserId,
                        following_id: targetUserId
                    });
                if (error) throw error;
            }
        } catch (error) {
            console.error("Error toggling follow:", error);
            setIsFollowing(previousState); // Revert
        } finally {
            setIsLoading(false);
        }
    }, [currentUserId, targetUserId, isFollowing, isLoading]);

    return { isFollowing, toggleFollow, isLoading };
}
