const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require("./data/categories");
const course = require("./data/course.json");

app.get("/", (req, res) => {
  res.send("Course API Running");
});

app.get("/course-categories", (req, res) => {
  res.send(categories);
});

app.get("/course", (req, res) => {
  res.send(course);
});

app.listen(port, () => {
  console.log("Dragon News Server running on port", port);
});
