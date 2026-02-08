const express = require("express");
require("dotenv").config();

const app = express();

const babyNames = [
  "Aarav",
  "Vivaan",
  "Aditya",
  "Krishna",
  "Anaya",
  "Diya",
  "Ishaan",
  "Riya",
  "Kabir",
  "Meera"
];

app.get("/", (req, res) => {
  const randomIndex = Math.floor(Math.random() * babyNames.length)
  res.status(200).json({
    success: true,
    name: babyNames[randomIndex]
  });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
