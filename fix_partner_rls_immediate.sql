-- Check current policies
select * 
from pg_policies 
where tablename = 'partner';

-- Disable RLS temporarily
alter table public.partner disable row level security;

-- Drop ALL existing policies
drop policy if exists "Enable insert access for all users" on public.partner;
drop policy if exists "Enable read access for authenticated users" on public.partner;
drop policy if exists "Enable all access for service role" on public.partner;
drop policy if exists "anon_insert" on public.partner;
drop policy if exists "auth_select" on public.partner;
drop policy if exists "service_role_all" on public.partner;
drop policy if exists "partner_insert_policy" on public.partner;
drop policy if exists "partner_select_policy" on public.partner;
drop policy if exists "partner_service_policy" on public.partner;

-- Create fresh policies with simpler names and explicit permissions
create policy "partner_insert_policy" 
    on public.partner 
    for insert 
    to anon, public
    with check (true);

create policy "partner_select_policy" 
    on public.partner 
    for select 
    to authenticated 
    using (true);

create policy "partner_service_policy" 
    on public.partner 
    for all 
    to service_role 
    using (true) 
    with check (true);

-- Re-enable RLS
alter table public.partner enable row level security;

-- Verify policies
select * 
from pg_policies 
where tablename = 'partner'; 