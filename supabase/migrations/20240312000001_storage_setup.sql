-- Enable RLS on storage.objects
alter table storage.objects enable row level security;

-- Create storage bucket policies
create policy "Allow authenticated users to view files"
on storage.objects
for select
to authenticated
using (bucket_id = 'marina-prima-sukses-web');

create policy "Allow service role to upload files"
on storage.objects
for insert
to service_role
with check (bucket_id = 'marina-prima-sukses-web'); 