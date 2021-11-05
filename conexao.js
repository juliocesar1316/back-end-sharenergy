const knex = require("knex")({
  client: "pg",
  connection: {
    host: "ec2-54-211-174-60.compute-1.amazonaws.com",
    port: 5432,
    user: "ehambmeefhawzr",
    password:
      "ebc171fd34ce9bf27458015e446b9d8ccbf98d5904009c3150dad14ad01d0737",
    database: "d7l9l8b34qkd9e",
    ssl: {
      rejectUnauthorized: false,
    },
  },
});
module.exports = knex;
