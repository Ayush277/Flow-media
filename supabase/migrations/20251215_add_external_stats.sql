alter table public.profiles add column if not exists external_stats jsonb default '{}'::jsonb;
