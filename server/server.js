const express = require("express");
const app = express();

app.use(express.static("source"));

app.get("/api/", (req, res) =>
  res.send("Hello")
);

app.listen(8080, () => console.log("Listening on port 8080!"));