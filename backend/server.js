import express from "express";
import dotenv from "dotenv";

const app = express();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// app.get("/aupy", (req, res) => {
//   res.send("<h1>Yo NEGA wassup!</h1>");
// });

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Why did the tomato turn red?",
      content: "Because it saw the salad dressing.", //hehe boi
    },
    {
      id: 2,
      title: "Why did the cookie go to the doctor?",
      content: "Because it had too much chocolate.",
    },
    {
      id: 3,
      title: "Why did the scarecrow win an award?",
      content: "Because he was outstanding in his field.",
    },
    {
      id: 4,
      title: "Why did the banana split?",
      content: "Because it was peeling.",
    },
    {
      id: 5,
      title: "Why did the chicken cross the road?",
      content: "To get to the other side.",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 5000;
app.listen(process.env.PORT, () => {
  console.log(`app listening on port http://localhost:${port}`);
});
