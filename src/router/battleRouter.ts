import express from "express";
import { BattleController } from "../controller/BattleController";

const battleRouter = express.Router();

const battleController = new BattleController();

battleRouter.get("/", battleController.getBattles);
battleRouter.post("/", battleController.createBattle);

export default battleRouter;
