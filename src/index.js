import express from "express";
const app = express();

// Example usage in your main server file
import connectDB from "./db/index.js";

connectDB(`mongodb://localhost:27017/chai_backend`);
import dotenv from "dotenv";

port = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
