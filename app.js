const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from AWS ECS íº€,its running successful and managed by team NorWe");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});

