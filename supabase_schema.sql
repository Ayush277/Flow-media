-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- PROFILES TABLE
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  username text unique,
  full_name text,
  avatar_url text,
  bio text,
  website text,
  location text,
  selected_frame text default 'default',
  hours_focused int default 0,
  flows_done int default 0,
  rank_score int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- POSTS TABLE
create table public.posts (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  content text,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- TASKS TABLE
create table public.tasks (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  post_id uuid references public.posts(id) on delete cascade,
  text text not null,
  is_completed boolean default false,
  duration_seconds int default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- STORIES TABLE
create table public.stories (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  media_url text,
  content text,
  type text check (type in ('image', 'text')),
  background_color text,
  expires_at timestamp with time zone not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- USER AWARDS TABLE
create table public.user_awards (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  platform text check (platform in ('github', 'leetcode', 'wakatime')),
  award_id text,
  earned_date text,
  metadata jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- STORAGE BUCKETS
insert into storage.buckets (id, name, public) values ('avatars', 'avatars', true);
insert into storage.buckets (id, name, public) values ('post-images', 'post-images', true);
insert into storage.buckets (id, name, public) values ('story-media', 'story-media', true);

-- RLS POLICIES (Simple Public Read, Authenticated Write for now)
alter table public.profiles enable row level security;
create policy "Public profiles are viewable by everyone." on public.profiles for select using (true);
create policy "Users can insert their own profile." on public.profiles for insert with check (auth.uid() = id);
create policy "Users can update own profile." on public.profiles for update using (auth.uid() = id);

alter table public.posts enable row level security;
create policy "Public posts are viewable by everyone." on public.posts for select using (true);
create policy "Users can insert their own posts." on public.posts for insert with check (auth.uid() = user_id);

alter table public.tasks enable row level security;
create policy "Users can view their own tasks." on public.tasks for select using (auth.uid() = user_id);
create policy "Users can insert their own tasks." on public.tasks for insert with check (auth.uid() = user_id);
create policy "Users can update their own tasks." on public.tasks for update using (auth.uid() = user_id);

alter table public.stories enable row level security;
create policy "Stories are viewable by everyone." on public.stories for select using (true);
create policy "Users can insert their own stories." on public.stories for insert with check (auth.uid() = user_id);

-- TRIGGER TO CREATE PROFILE ON SIGNUP
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url, username)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url', new.email);
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
