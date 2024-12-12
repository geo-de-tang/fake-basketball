// CJS
const { faker } = require("@faker-js/faker");

function createRandomUser() {
  return {
    first_name: faker.person.firstName(),
    last_name: faker.person.lastName(),
    sex: faker.person.sex() === "male" ? "M" : "F",
    email: faker.internet.email(),
    password: faker.internet.password(),
    avatar: faker.image.avatar(),
    birthdate: faker.date.birthdate(),
  };
}

const users = faker.helpers.multiple(createRandomUser, {
  count: 200_000,
});

console.log(
  users
    .map(
      (user) =>
        `${user.first_name},${user.last_name},${user.sex},${user.email},${
          user.password
        },${user.avatar},${user.birthdate.toISOString().split("T")[0]},`
    )
    .join("\n")
);
