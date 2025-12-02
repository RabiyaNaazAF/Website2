create table public.profiles (
  id uuid not null default auth.uid (),
  full_name text not null,
  phone text null,
  email text null,
  created_at timestamp without time zone null default now(),
  constraint profiles_pkey primary key (id)
) TABLESPACE pg_default;
