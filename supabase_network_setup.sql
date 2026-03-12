-- CON/FORM Network Schema Setup
-- Run this in the Supabase SQL Editor

-- 1. Profiles Table
CREATE TABLE IF NOT EXISTS public.network_profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(), -- Used as the local session ID
  name text NOT NULL,
  role text NOT NULL,
  bio text,
  avatar_url text,
  is_open_to_bump boolean DEFAULT true,
  bumps_made integer DEFAULT 0,
  bumps_received integer DEFAULT 0,
  connections_made integer DEFAULT 0,
  last_active_at timestamp with time zone DEFAULT now(),
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS for Profiles
ALTER TABLE public.network_profiles ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert profiles
CREATE POLICY "Allow anonymous users to insert profiles"
ON public.network_profiles
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow anyone to read profiles (needed for the directory)
CREATE POLICY "Allow anyone to read profiles"
ON public.network_profiles
FOR SELECT
TO anon
USING (true);

-- Allow users to update their own profile (assuming they pass their UUID in the request payload, we check anon role)
CREATE POLICY "Allow anonymous to update profiles"
ON public.network_profiles
FOR UPDATE
TO anon
USING (true);


-- 2. Bumps Table
CREATE TABLE IF NOT EXISTS public.network_bumps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  sender_id uuid REFERENCES public.network_profiles(id) ON DELETE CASCADE,
  receiver_id uuid REFERENCES public.network_profiles(id) ON DELETE CASCADE,
  status text NOT NULL DEFAULT 'pending' CHECK (status IN ('pending', 'accepted', 'rejected', 'completed')),
  coin_flip_result text, -- 'sender_seeks', 'receiver_seeks'
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now()
);

-- Enable RLS for Bumps
ALTER TABLE public.network_bumps ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert bumps
CREATE POLICY "Allow anonymous to insert bumps"
ON public.network_bumps
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow anyone to read bumps
CREATE POLICY "Allow anonymous to read bumps"
ON public.network_bumps
FOR SELECT
TO anon
USING (true);

-- Allow anyone to update bumps (to accept/reject, or change status)
CREATE POLICY "Allow anonymous to update bumps"
ON public.network_bumps
FOR UPDATE
TO anon
USING (true);


-- 3. Messages Table (for the mini-chat)
CREATE TABLE IF NOT EXISTS public.network_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  bump_id uuid REFERENCES public.network_bumps(id) ON DELETE CASCADE,
  sender_id uuid REFERENCES public.network_profiles(id) ON DELETE CASCADE,
  content text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable RLS for Messages
ALTER TABLE public.network_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert messages
CREATE POLICY "Allow anonymous to insert messages"
ON public.network_messages
FOR INSERT
TO anon
WITH CHECK (true);

-- Allow anyone to read messages
CREATE POLICY "Allow anonymous to read messages"
ON public.network_messages
FOR SELECT
TO anon
USING (true);


-- Enable Realtime for network_bumps and network_messages and network_profiles
-- (Need to be executed in the Supabase Dashboard explicitly or via SQL if possible)
-- This SQL attempts to add them to the realtime publication
alter publication supabase_realtime add table public.network_bumps;
alter publication supabase_realtime add table public.network_messages;
alter publication supabase_realtime add table public.network_profiles;
