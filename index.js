console.log("Starting server...");

const express = require("express");
const app = express();

const students = [
  { id: 1, name: "Aarav Mehta", age: 20, course: "Computer Science" },
  { id: 2, name: "Sneha Reddy", age: 21, course: "Electronics" },
  { id: 3, name: "Karan Shah", age: 19, course: "Mechanical Engineering" },
  { id: 4, name: "Isha Roy", age: 22, course: "Civil Engineering" },
  { id: 5, name: "Ravi Kumar", age: 20, course: "Information Technology" },
  { id: 6, name: "Meera Nair", age: 21, course: "Biotechnology" },
  { id: 7, name: "Ajay Das", age: 23, course: "Data Science" },
  { id: 8, name: "Pooja Joshi", age: 20, course: "Artificial Intelligence" },
  { id: 9, name: "Dev Mishra", age: 19, course: "Mathematics" },
  { id: 10, name: "Tanya Gupta", age: 22, course: "Physics" }
];

app.get("/", (req, res) => {
  res.json(students);
});

app.listen(4000, () => {
  console.log("✅ Server running at http://localhost:4000");
});
