// CJS
import { faker } from "@faker-js/faker";
import * as fs from "fs";

function createRandomUser() {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    sex: faker.person.sex() === "male" ? "M" : "F",
    email: faker.internet.email(),
    password: faker.internet.password(),
    height: faker.number.float({ min: 58, max: 84 }),
    avatar: faker.image.avatar(),
    weight: faker.number.float({ min: 100, max: 350 }),
    birthdate: faker.date.birthdate(),
  };
}

const users = faker.helpers.multiple(createRandomUser, {
  count: 200_000,
});

fs.writeFileSync(
  "players.csv",
  "first_name,last_name,sex,email,password,avatar,height,weight,birthdate,\n"
);

fs.appendFileSync("players.csv",
  users
    .map(
      (user) =>
        `${user.first_name},${user.last_name},${user.sex},${user.email},${
          user.password
        },${user.avatar},${user.height},${user.weight},${
          user.birthdate.toISOString().split("T")[0]
        },`
    )
    .join("\n")
);
