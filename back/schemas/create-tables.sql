create table players (
    id serial primary key,
    name text not null,
    email text not null,
    password text not null,
    birthday date not null,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
);