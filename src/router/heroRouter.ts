import express from "express";
import { HeroController } from "../controller/HeroController";

const heroRouter = express.Router();

const heroController = new HeroController();

heroRouter.get("/", heroController.getHeroes);
heroRouter.post("/", heroController.createHero);

export default heroRouter;
