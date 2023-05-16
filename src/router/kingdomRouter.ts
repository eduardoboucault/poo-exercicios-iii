import express from "express";
import { KingdomController } from "../controller/KingdomController";

const kingdomRouter = express.Router();

const kingdomController = new KingdomController();

kingdomRouter.post("/", kingdomController.createKingdom);
kingdomRouter.get("/", kingdomController.getKingdoms);
// kingdomRouter.put("/:id", kingdomController.editKingdom);
// kingdomRouter.delete("/:id", kingdomController.deleteKingdom);

export default kingdomRouter;
