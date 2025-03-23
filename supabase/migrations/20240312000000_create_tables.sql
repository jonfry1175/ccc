-- Create tables for the application
create table if not exists public.candidate (
  id serial primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  first_name text not null,
  last_name text not null,
  date_of_birth timestamp with time zone,
  gender text,
  passport_id text,
  email text not null,
  whatsapp_number text not null,
  department text not null,
  position text not null,
  cv_url text,
  certificate_url text
);

create table if not exists public.partner (
  id serial primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  first_name text not null,
  last_name text not null,
  email text not null,
  phone_number text not null,
  company_name text not null,
  company_website text,
  country text not null,
  message text
);

-- Set up Row Level Security (RLS)
alter table public.candidate enable row level security;
alter table public.partner enable row level security;

-- Create policies for public access (anyone can submit applications)
create policy "Enable insert access for all users" on public.candidate
  for insert
  to public
  with check (true);

create policy "Enable insert access for all users" on public.partner
  for insert
  to public
  with check (true);

-- Create policies for read access (only authenticated users)
create policy "Enable read access for authenticated users" on public.candidate
  for select
  to authenticated
  using (true);

create policy "Enable read access for authenticated users" on public.partner
  for select
  to authenticated
  using (true);

-- Create policies for service role (full access)
create policy "Enable all access for service role" on public.candidate
  for all
  to service_role
  using (true)
  with check (true);

create policy "Enable all access for service role" on public.partner
  for all
  to service_role
  using (true)
  with check (true); 