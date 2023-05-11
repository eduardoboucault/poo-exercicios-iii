import express from "express";
import { KingdomController } from "../controller/KingdomController";

const kingdomRouter = express.Router();

const kingdomController = new KingdomController();

kingdomRouter.get("/", kingdomController.getKingdoms);
kingdomRouter.post("/", kingdomController.createKingdom);

export default kingdomRouter;
