-- 20,000 to 200,000 users for one gym is a reasonable amount
-- that a mariadb instance can handle it
create table players (
    id serial primary key,
    first_name varchar(255) not null,
    last_name varchar(255) not null,
    sex varchar(1) not null,
    email varchar(255) not null unique,
    passwordhash varchar(255) not null,
    profile_picture_path varchar(255),
    height float not null,
    weight float not null,
    birthday date not null,
    twitter varchar(255),
    instagram varchar(255),
    youtube varchar(255),
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
);