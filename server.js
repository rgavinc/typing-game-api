const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const challenge = require("./controllers/challenge");

const app = express();

// TODO: figure this out
// const corsOptions = {
//   origin: "http://localhost:3001",
//   optionsSuccessStatus: 200
// };

app.use(cors());

app.listen(process.env.PORT, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to typing game api");
});

app.get("/challenge", challenge.handleChallenge);
