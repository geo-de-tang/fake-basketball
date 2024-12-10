-- 20,000 to 200,000 users for one gym is a reasonable amount
-- that a mariadb instance can handle it
create table players (
    id serial primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    email varchar(255) not null unique,
    passwordhash varchar(255) not null,
    profile_picture_path varchar(255),
    birthday date not null,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
)