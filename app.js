const express = require("express");
const { link } = require("node:fs");
const app = express();
const PORT = 3000;

const path = require("node:path");

const links = [
  { href: "/", text: "Home" },
  { href: "about", text: "About" },
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("index", { link: links });
});

app.listen(PORT, () => {
  console.log(`Listening on port:${PORT}`);
});
