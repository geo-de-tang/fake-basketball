create table player_game (
    player_id integer not null,
    game_id integer not null,
    assists integer not null,
    blocks integer not null,
    defensive_rebounds integer not null,
    fouls integer not null,
    free_throws_made integer not null,
    free_throws_missed integer not null,
    offensive_rebounds integer not null,
    points integer not null,
    steals integer not null,
    turnovers integer not null,
    three_pointers_made integer not null,
    three_pointers_missed integer not null,
    two_pointers_made integer not null,
    two_pointers_missed integer not null,
)