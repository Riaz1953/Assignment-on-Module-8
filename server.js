import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Express.js Server" });
});

app.get("/about", (req, res) => {
  res.status(200).json({ message: "This is About Page" });
});

app.get("/contact", (req, res) => {
  res.status(200).json({ message: "This is Contact Page" });
});

app.get("/services", (req, res) => {
  res.status(200).json({ message: "Our Services" });
});

app.get("/students", (req, res) => {
  res.status(200).json({ message: "Student List" });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is listening on port : ${process.env.PORT}`);
});
