import express from "express";

const app = express();
const port: number = 8000;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`running ...${port}....`);
});
