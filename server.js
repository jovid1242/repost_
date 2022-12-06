const express = require("express");
const app = express();
const port = 8589 || 5600;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/portfolio", (req, res) => {
  res.sendFile(__dirname + "/portfolio.html");
});

app.get("/team", (req, res) => {
  res.sendFile(__dirname + "/team.html");
});

app.get("/film", (req, res) => {
  res.sendFile(__dirname + "/film.html");
});

var options = {
  dotfiles: "ignore",
  etag: false,
  extensions: ["htm", "html"],
  type: "text/plain",
  index: false,
  maxAge: "1d",
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now());
  },
};

app.use(express.static("public", options));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
