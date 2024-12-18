import express, { Request, Response } from "express";

import cors from "cors";

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
