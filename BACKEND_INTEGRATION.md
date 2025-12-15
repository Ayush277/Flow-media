# Flow Media - Backend Integration Guide

This document outlines the database schema, storage requirements, and integration points needed to fully connect the frontend components to the Supabase backend.

## 1. Database Schema (Supabase PostgreSQL)

You need to create the following tables in your Supabase project.

### `profiles`
Stores user profile information.
- `id` (uuid, primary key, references `auth.users.id`)
- `username` (text, unique)
- `full_name` (text)
- `avatar_url` (text)
- `bio` (text)
- `website` (text)
- `location` (text)
- `selected_frame` (text, default: 'default')
- `hours_focused` (int, default: 0)
- `flows_done` (int, default: 0)
- `rank_score` (int, default: 0)
- `created_at` (timestamp)

### `posts`
Stores user posts/flows.
- `id` (uuid, primary key)
- `user_id` (uuid, references `profiles.id`)
- `content` (text)
- `image_url` (text, optional)
- `created_at` (timestamp)

### `tasks`
Stores tasks associated with a post or a user's daily flow.
- `id` (uuid, primary key)
- `user_id` (uuid, references `profiles.id`)
- `post_id` (uuid, references `posts.id`, optional)
- `text` (text)
- `is_completed` (boolean, default: false)
- `duration_seconds` (int, default: 0)
- `created_at` (timestamp)

### `stories` (Daily Flow)
Stores ephemeral updates.
- `id` (uuid, primary key)
- `user_id` (uuid, references `profiles.id`)
- `media_url` (text, optional)
- `content` (text, optional)
- `type` (text: 'image' | 'text')
- `background_color` (text, optional)
- `expires_at` (timestamp)
- `created_at` (timestamp)

### `user_awards`
Stores external platform badges.
- `id` (uuid, primary key)
- `user_id` (uuid, references `profiles.id`)
- `platform` (text: 'github' | 'leetcode' | 'wakatime')
- `award_id` (text, e.g., 'arctic-code-vault')
- `earned_date` (text)
- `metadata` (jsonb, optional)

### `follows`
- `follower_id` (uuid, references `profiles.id`)
- `following_id` (uuid, references `profiles.id`)
- `created_at` (timestamp)

---

## 2. Storage Buckets

Create the following public buckets in Supabase Storage:

1.  **`avatars`**: For user profile pictures.
2.  **`post-images`**: For images attached to posts.
3.  **`story-media`**: For images/videos in Daily Flow.

---

## 3. Integration Points & Required Actions

### A. Authentication & User Profile
*   **File**: `src/components/profile/ProfileHeader.tsx`
*   **Action**:
    *   Fetch `profiles` table on mount using `user.id`.
    *   Update `profiles` table when "Save Changes" is clicked in the Edit Modal.
    *   Update `selected_frame` column when a frame is selected.

### B. Feed & Posts
*   **File**: `src/app/(main)/feed/page.tsx`
*   **Action**:
    *   Fetch `posts` joined with `profiles` and `tasks`.
    *   Sort by `created_at` descending.
*   **File**: `src/components/feed/CreatePost.tsx`
*   **Action**:
    *   Insert into `posts` table.
    *   If image exists, upload to `post-images` bucket first, then save URL.
    *   Insert associated tasks into `tasks` table with the new `post_id`.

### C. Tasks & Flow Mode
*   **File**: `src/components/tasks/TaskGenerator.tsx`
*   **Action**:
    *   When "Commit to Public Feed" is clicked:
        *   Create a new post in `posts`.
        *   Save generated tasks to `tasks`.
    *   **Timer Logic**: When a timer completes:
        *   Update `hours_focused` in `profiles`.
        *   Update `duration_seconds` in `tasks`.

### D. External Awards
*   **File**: `src/components/profile/ExternalAwards.tsx`
*   **Action**:
    *   Fetch from `user_awards` table.
    *   (Future) Create a backend Edge Function to periodically scrape/fetch data from GitHub/LeetCode APIs and update this table.

### E. Daily Flow (Stories)
*   **File**: `src/components/feed/StoriesSection.tsx`
*   **Action**:
    *   Fetch `stories` where `expires_at` > `now()`.
    *   Group by `user_id`.

---

## 4. Next Steps for Implementation

1.  **Run SQL Scripts**: Execute the SQL to create the tables above (I can generate this for you).
2.  **Create Hooks**: I will create a `useProfile` and `usePosts` hook to centralize this logic.
3.  **Connect Components**: Systematically go through the files listed above and replace mock data with these hooks.
