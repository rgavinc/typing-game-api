const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const knex = require("knex");

const db = knex({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "1234",
    database: "typing-game"
  }
});

console.log(
  db
    .select("content")
    .from("challenge")
    .where({ group_id: 1 })
    .then(data => {
      console.log(data);
    })
);

const challenge = require("./controllers/challenge");
const score = require("./controllers/score");

const app = express();

// TODO: figure this out
// const corsOptions = {
//   origin: "http://localhost:3001",
//   optionsSuccessStatus: 200
// };

app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to typing game api");
});

app.get("/challenge/:id", challenge.handleChallenge(db));
app.get("/all-challenges", challenge.allChallenges(db));
app.post("/save-score", score.saveScore(db));
