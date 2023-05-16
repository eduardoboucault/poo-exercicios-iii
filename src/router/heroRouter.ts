import express from "express";
import { HeroController } from "../controller/HeroController";
import { HeroBusiness } from "../business/HeroBusiness";
import { HeroDatabase } from "../database/HeroDatabase";

const heroRouter = express.Router();

const heroController = new HeroController(new HeroBusiness(new HeroDatabase()));

heroRouter.post("/", heroController.createHero);
heroRouter.get("/", heroController.getHeroes);
heroRouter.put("/:id", heroController.editHero);
heroRouter.delete("/:id", heroController.deleteHero);

export default heroRouter;
