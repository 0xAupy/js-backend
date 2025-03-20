import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/aupy", (req, res) => {
  res.send("<h1>Yo NEGA wassup!</h1>");
});

const port = process.env.PORT;
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${port}`);
});
