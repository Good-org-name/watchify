import db from "./server/db/db.js";
import User from "./server/db/user.js";

async function seed() {
  await db.sync({ force: true });

  const users = await Promise.all([
    User.create({
      name: "kevin",
      email: "kevin@email.com",
      username: "kevin",
      password: "123",
    }),
    User.create({
      name: "michele",
      email: "michele@email.com",
      username: "michele",
      password: "123",
    }),
    User.create({
      name: "spike",
      email: "spike@email.com",
      username: "spike",
      password: "123",
    }),
    User.create({
      name: "andrew",
      email: "andrew@email.com",
      username: "andrew",
      password: "123",
    }),
  ]);

  console.log(`Seeded ${users.length} users`);
}

seed()
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    db.close();
  });
