// CJS
const { faker } = require("@faker-js/faker");

function createGames() {
  // no player id can be duplicated
  // updated_at has to happen after created_at
  // ended_at has to happen after began_at

  return {
    home_player_1_id: faker.number.int({ min: 0, max: 197348 }),
    home_player_2_id: faker.number.int({ min: 0, max: 197348 }),
    home_player_3_id: faker.number.int({ min: 0, max: 197348 }),
    home_player_4_id: faker.number.int({ min: 0, max: 197348 }),
    home_player_5_id: faker.number.int({ min: 0, max: 197348 }),
    away_player_1_id: faker.number.int({ min: 0, max: 197348 }),
    away_player_2_id: faker.number.int({ min: 0, max: 197348 }),
    away_player_3_id: faker.number.int({ min: 0, max: 197348 }),
    away_player_4_id: faker.number.int({ min: 0, max: 197348 }),
    away_player_5_id: faker.number.int({ min: 0, max: 197348 }),
    home_score: faker.number.int({ min: 0, max: 100 }),
    away_score: faker.number.int({ min: 0, max: 100 }),
    created_at: faker.date.recent(),
    updated_at: faker.date.recent(),
    began_at: faker.date.recent(),
    ended_at: faker.date.recent(),
  };
}

const games = faker.helpers.multiple(createGames, {
  count: 20_000,
});

const HEADER =
  "home_player_1_id,home_player_2_id,\
home_player_3_id,home_player_4_id,home_player_5_id,\
away_player_1_id,away_player_2_id,away_player_3_id,\
away_player_4_id,away_player_5_id,home_score,away_sc\
ore,created_at,updated_at,began_at,ended_at,";

console.log(HEADER);

console.log(
  games
    .map(
      (game) =>
        `${game.home_player_1_id},${game.home_player_2_id},${
          game.home_player_3_id
        },${game.home_player_4_id},${game.home_player_5_id},${
          game.away_player_1_id
        },${game.away_player_2_id},${game.away_player_3_id},${
          game.away_player_4_id
        },${game.away_player_5_id},${game.home_score},${game.away_score},${
          game.created_at.toISOString().split("T")[0]
        },${game.updated_at.toISOString().split("T")[0]},${
          game.began_at.toISOString().split("T")[0]
        },${game.ended_at.toISOString().split("T")[0]},`
    )
    .join("\n")
);
