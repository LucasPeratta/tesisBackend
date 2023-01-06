const config = {
  client: "sqlite3",
  connection: {
    filename: "./sqlite3",
  },
  useNullAsDefault: true,
};

const db = require("knex")(config);

module.exports = db;
