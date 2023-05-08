import express from "express";
import cors from "cors";
import { HeroController } from "./controller/HeroController";
import { KingdomController } from "./controller/KingdomController";
import { BattleController } from "./controller/BattleController";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log(`Server is already to use on ${3003} port.`);
});

const heroController = new HeroController();
const kingdomController = new KingdomController();
const battleController = new BattleController();

app.get("/heroes", heroController.getHeroes);
app.get("/kingdoms", kingdomController.getKingdoms);
app.get("/battles", battleController.getBattles);
// app.post("/heroes", heroController.createHero);
