create table fake_basketball_games (
    id serial primary key,
    game_type text not null,
    home_player_1_id integer not null references players(id),
    home_player_2_id integer not null references players(id),
    home_player_3_id integer not null references players(id),
    home_player_4_id integer not null references players(id),
    home_player_5_id integer not null references players(id),
    away_player_1_id integer not null references players(id),
    away_player_2_id integer not null references players(id),
    away_player_3_id integer not null references players(id),
    away_player_4_id integer not null references players(id),
    away_player_5_id integer not null references players(id),
    home_score integer not null,
    away_score integer not null,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now() beginning timestamp not null,
    ending timestamp not null
);

create table fake_basketball_game_states (
    id serial primary key,
    game_id integer not null references games(id),
    current_time timestamp not null,
    home_score integer not null,
    away_score integer not null,
    ended boolean not null,
)



create table fake_basketball_players_games (
    id serial primary key,
    game_id integer not null references games(id),
    player_id integer not null references players(id),
    points integer not null,
    rebounds integer not null,
    assists integer not null,
    steals integer not null,
    blocks integer not null,
    turnovers integer not null,
    fouls integer not null,
    offensive_rebounds integer not null,
    defensive_rebounds integer not null,
    shots_made integer not null,
    shots_missed integer not null,
    free_throws_made integer not null,
    free_throws_missed integer not null,
    three_pointers_made integer not null,
    three_pointers_missed integer not null,
);

create table fake_basketball_players_actions (
    id serial primary key,
    player_id integer not null references players(id),
    game_id integer not null references games(id),
    action_type text not null,
    created_at timestamp not null default now()
)