import express from "express";
import cors from "cors";
import heroRouter from "./router/heroRouter";
import battleRouter from "./router/battleRouter";
import kingdomRouter from "./router/kingdomRouter";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log(`Server is already to use on ${3003} port.`);
});

app.use("/heroes", heroRouter);
app.use("/battles", battleRouter);
app.use("/kingdoms", kingdomRouter);
