-- Drop existing policies to start fresh
drop policy if exists "Enable insert access for all users" on public.candidate;
drop policy if exists "Enable read access for authenticated users" on public.candidate;
drop policy if exists "Enable all access for service role" on public.candidate;

-- Recreate policies with proper permissions
create policy "anon_insert" 
    on public.candidate 
    for insert 
    to anon, authenticated
    with check (true);

create policy "auth_select" 
    on public.candidate 
    for select 
    to authenticated 
    using (true);

create policy "service_role_all" 
    on public.candidate 
    for all 
    to service_role 
    using (true) 
    with check (true);

-- Make sure RLS is enabled
alter table public.candidate enable row level security; 