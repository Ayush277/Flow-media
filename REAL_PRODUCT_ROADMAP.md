# Flow Media - "Real Product" Roadmap

This document tracks the features and improvements required to transition Flow Media from a prototype to a fully-functioning, polish social product.

## 🟢 Phase 1: Core Connectivity & Real-time (IN PROGRESS)

### 1. Real-time Infrastructure
- [x] **Profile Synchronization**: Ensure profile stats (hours, flows) update instantly across tabs/devices. (Fixed in `useProfile` hook)
- [x] **Live Feed Updates**: Feed should automatically show new posts without manual refresh. (Fixed in `FeedPage` subscription)
- [x] **Persistent Media**: Images/Stories should persist after refresh (Switched to Supabase Storage `publicUrl`).

### 2. Stories Experience (Daily Flow)
- [x] **Modern Visuals**: Overhaul `StoriesSection` with immersive animations and better UI.
- [x] **Drag & Drop**: Allow easier media upload.
- [x] **Gradient/Themed Backgrounds**: Better text story aesthetics.

---

## 🟡 Phase 2: Social Interactions (NEXT)

### 3. Engagement (Likes & Comments)
- [x] **Database Schema**: Create `likes` and `comments` tables.
- [x] **Like Feature**: Implement "Like" button with optimistic UI updates.
- [x] **Comment System**: Build a comment drawer/modal to read and write comments.
- [x] **Real-time**: Listen for new likes/comments on a post.

### 4. Graph (Follow System)
- [ ] **Database Schema**: Create `follows` table.
- [ ] **Follow Logic**: Ability to follow/unfollow users from their profile or feed.
- [ ] **Feed Filtering**: "Following" tab only shows posts from followed users.

---

## 🔴 Phase 3: Gamification & Polish

### 5. True Gamification
- [ ] **Dynamic Stats**: Remove hardcoded "128 Days" streaks; connect to real data or logic.
- [ ] **Ranking System**: Implement basic ranking logic based on 'hours_focused'.

### 6. UX Polish
- [ ] **Infinite Scroll**: Replace simple list with infinite loading to handle many posts.
- [ ] **Toast Notifications**: Replace browser `alert()` with specific toast UI (e.g., "Post created!").
- [ ] **Loading States**: Add skeleton screens for smoother data fetching.
