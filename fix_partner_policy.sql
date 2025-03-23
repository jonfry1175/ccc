-- Drop existing policies
drop policy if exists "Enable insert access for all users" on public.partner;
drop policy if exists "Enable read access for authenticated users" on public.partner;
drop policy if exists "Enable all access for service role" on public.partner;

-- Create fresh policies
create policy "Enable insert access for all users" on public.partner
  for insert
  to public
  with check (true);

create policy "Enable read access for authenticated users" on public.partner
  for select
  to authenticated
  using (true);

create policy "Enable all access for service role" on public.partner
  for all
  to service_role
  using (true)
  with check (true);

-- Make sure RLS is enabled
alter table public.partner enable row level security; 