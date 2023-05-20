// create an express web sever

import express from "express";

const app = express();

// create knex instance with postgres connection

import knex from "knex";

const db = knex({
  client: "pg",
  connection: {
    host: "000000000",
    user: "XXXXXXXX",
    password: "XXXXXXXX",
    database: "postgres",
  },
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
