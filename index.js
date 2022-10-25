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

app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const selectedCourse = course.find((n) => n._id === id);
  res.send(selectedCourse);
});
app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  if (id === "07") {
    res.send(course);
  } else {
    const category_course = course.filter((n) => n.course_id === id);
    res.send(category_course);
  }
});
app.listen(port, () => {
  console.log("Dragon News Server running on port", port);
});
