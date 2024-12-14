// CJS
import { faker } from "@faker-js/faker";
import * as fs from "fs";

function createGames(_unknown, index) {
  // no player id can be duplicated
  // updated_at has to happen after created_at
  // ended_at has to happen after began_at
  const player_ids = [];

  while (player_ids.length < 10) {
    const id = faker.number.int({ min: 0, max: 197348 });
    const two_points = faker.number.int({ min: 0, max: 30 });
    const three_points = faker.number.int({ min: 0, max: 30 });
    const two_points_missed = faker.number.int({ min: 0, max: 30 });
    const three_points_missed = faker.number.int({ min: 0, max: 30 });
    const free_throws = faker.number.int({ min: 0, max: 30 });
    const free_throws_missed = faker.number.int({ min: 0, max: 30 });

    if (!player_ids.includes(id)) {
      player_ids.push({
        id,
        two_points,
        three_points,
        two_points_missed,
        three_points_missed,
        two_points_percentage: two_points / (two_points + two_points_missed),
        fouls: faker.number.int({ min: 0, max: 5 }),
        three_points_percentage:
          three_points / (three_points + three_points_missed),
        free_throws,
        free_throws_missed,
        points: two_points * 2 + three_points * 3 + free_throws,
        rebounds: faker.number.int({ min: 0, max: 30 }),
        assists: faker.number.int({ min: 0, max: 30 }),
        turnovers: faker.number.int({ min: 0, max: 5 }),
      });
    }
  }

  const home = player_ids.slice(0, 5).reduce(
    (prev, player) => ({
      assists: prev.assists + player.assists,
      blocks: prev.blocks + player.blocks,
      free_thows: prev.free_throws + player.free_throws,
      fouls: prev.fouls + player.fouls,
      free_throws_missed: prev.free_throws_missed + player.free_throws_missed,
      points: prev.points + player.points,
      rebounds: prev.rebounds + player.rebounds,
      steals: prev.steals + player.steals,
      three_points: prev.three_points + player.three_points,
      three_points_missed:
        prev.three_points_missed + player.three_points_missed,
      turnovers: prev.turnovers + player.turnovers,
      two_points: prev.two_points + player.two_points,
      two_points_missed: prev.two_points_missed + player.two_points_missed,
    }),
    {
      assists: 0,
      blocks: 0,
      free_throws: 0,
      free_throws_missed: 0,
      points: 0,
      rebounds: 0,
      steals: 0,
      three_points: 0,
      three_points_missed: 0,
      turnovers: 0,
      two_points: 0,
      two_points_missed: 0,
    }
  );

  const away = player_ids.slice(5).reduce(
    (prev, player) => ({
      assists: prev.assists + player.assists,
      blocks: prev.blocks + player.blocks,
      free_thows: prev.free_throws + player.free_throws,
      free_throws_missed: prev.free_throws_missed + player.free_throws_missed,
      points: prev.points + player.points,
      rebounds: prev.rebounds + player.rebounds,
      steals: prev.steals + player.steals,
      three_points: prev.three_points + player.three_points,
      three_points_missed:
        prev.three_points_missed + player.three_points_missed,
      turnovers: prev.turnovers + player.turnovers,
      two_points: prev.two_points + player.two_points,
      two_points_missed: prev.two_points_missed + player.two_points_missed,
    }),
    {
      assists: 0,
      blocks: 0,
      free_throws: 0,
      free_throws_missed: 0,
      points: 0,
      rebounds: 0,
      steals: 0,
      three_points: 0,
      three_points_missed: 0,
      turnovers: 0,
      two_points: 0,
      two_points_missed: 0,
    }
  );

  return {
    game: {
      id: index,
      home_player_1_id: player_ids[0].id,
      home_player_2_id: player_ids[1].id,
      home_player_3_id: player_ids[2].id,
      home_player_4_id: player_ids[3].id,
      home_player_5_id: player_ids[4].id,
      away_player_1_id: player_ids[5].id,
      away_player_2_id: player_ids[6].id,
      away_player_3_id: player_ids[7].id,
      away_player_4_id: player_ids[8].id,
      away_player_5_id: player_ids[9].id,
      home_score: home.points,
      away_score: away.points,
      home_two_points: home.two_points,
      away_two_points: away.two_points,
      home_two_points_missed: home.two_points_missed,
      away_two_points_missed: away.two_points_missed,
      home_three_points: home.three_points,
      away_three_points: away.three_points,
      home_three_points_missed: home.three_points_missed,
      away_three_points_missed: away.three_points_missed,
      home_blocks: home.blocks,
      away_blocks: away.blocks,
      home_rebounds: home.rebounds,
      away_rebounds: away.rebounds,
      home_assists: home.assists,
      away_assists: away.assists,
      home_free_throws: home.free_throws,
      away_free_throws: away.free_throws,
      home_free_throws_missed: home.free_throws_missed,
      away_free_throws_missed: away.free_throws_missed,
      home_steals: home.steals,
      away_steals: away.steals,
      created_at: faker.date.past(),
      updated_at: faker.date.past(),
      began_at: faker.date.past(),
      ended_at: faker.date.past(),
    },
  };
}

const games = faker.helpers.multiple(createGames, {
  count: 20_000,
});

const HEADER =
  "game_id,home_player_1_id,home_player_2_id,\
home_player_3_id,home_player_4_id,home_player_5_id,\
away_player_1_id,away_player_2_id,away_player_3_id,\
away_player_4_id,away_player_5_id,home_score,away_sc\
ore,created_at,updated_at,began_at,ended_at,";

fs.writeFileSync("games.csv", HEADER + "\n");

fs.appendFileSync(
  "games.csv",
  games
    .map(
      ({ game }) =>
        `${game.id},${game.home_player_1_id},${game.home_player_2_id},${
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

const HEADER_PLAYER_GAMES =
  "g,\
  ";

fs.writeFileSync("player_games.csv", HEADER_PLAYER_GAMES + "\n");
