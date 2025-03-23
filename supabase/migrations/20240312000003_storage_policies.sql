-- Drop existing storage policies if any
drop policy if exists "Allow authenticated users to view files" on storage.objects;
drop policy if exists "Allow service role to upload files" on storage.objects;
drop policy if exists "Allow authenticated users to download files" on storage.objects;
drop policy if exists "Allow public access to files" on storage.objects;

-- Create storage policies
create policy "Allow public access to files"
on storage.objects
for select
to public
using (bucket_id = 'marina-prima-sukses-web');

create policy "Allow service role to upload files"
on storage.objects
for insert
to service_role
with check (bucket_id = 'marina-prima-sukses-web');

-- Make sure RLS is enabled
alter table storage.objects enable row level security; 