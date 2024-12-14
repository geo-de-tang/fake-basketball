-- 10 minute games, 20 minutes to transition
-- 3 games an hour
-- 36 games a day
-- 36 * 30 = 1080 games a month 
-- use a simple sql database or heavy.sql?

-- 1080 * 6 = 6480 player games a month
-- 6480 / 5 (games / player) = 1296 unique players a month

create table box_scores (
    id serial primary key,
    player_id_home_1 integer not null references players(id),
    player_id_home_2 integer not null references players(id),
    player_id_home_3 integer not null references players(id),
    player_id_home_4 integer not null references players(id),
    player_id_home_5 integer not null references players(id),
    player_id_away_1 integer not null references players(id),
    player_id_away_2 integer not null references players(id),
    player_id_away_3 integer not null references players(id),
    player_id_away_4 integer not null references players(id),
    player_id_away_5 integer not null references players(id),

    assists integer not null,
    blocks integer not null,
    defensive_rebounds integer not null,
    fouls integer not null,
    free_throws_made integer not null,
    free_throws_missed integer not null,
    offensive_rebounds integer not null,
    points integer not null,
    steals integer not null,
    three_pointers_made integer not null,
    three_pointers_missed integer not null,
    turnovers integer not null,
    two_pointers_made integer not null,
    two_pointers_missed integer not null,

    created_at timestamp not null default now()
)
