import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Server is already to use on 3003 port.");
});
