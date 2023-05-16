import express from "express";
import { BattleController } from "../controller/BattleController";

const battleRouter = express.Router();

const battleController = new BattleController();

battleRouter.post("/", battleController.createBattle);
battleRouter.get("/", battleController.getBattles);
// battleRouter.put("/:id", battleController.editBattle);
// battleRouter.delete("/:id", battleController.deleteBattle);

export default battleRouter;
