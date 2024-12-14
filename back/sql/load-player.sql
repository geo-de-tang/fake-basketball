LOAD DATA LOCAL INFILE '/home/george/Projects/MonoRepoTesting/fake-basketball/back/data/players.csv' INTO TABLE players FIELDS TERMINATED BY ',' LINES TERMINATED BY '\n' IGNORE 1 ROWS (
    first_name,
    last_name,
    sex,
    email,
    passwordhash,
    profile_picture_path,
    height,
    weight,
    birthday
)
SET
    id = NULL,
    created_at = NULL,
    updated_at = NULL;