import { Request, Response } from "express";
import { HeroBusiness } from "../business/HeroBusiness";
import { InputHero, InputQuery, OutputInformation } from "../types/types";
import { Hero } from "../models/Hero";
export class HeroController {
  public getHeroes = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: InputQuery = { q: req.query.q as string | undefined };

      const heroBusiness: HeroBusiness = new HeroBusiness();

      const output: Hero[] = await heroBusiness.getHeroes(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };

  public createHero = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: InputHero = {
        id: req.body.id,
        name: req.body.name,
        hero_class: req.body.hero_class,
        kingdom: req.body.kingdom,
        race: req.body.race,
        created_at: req.body.created_at,
      };

      const heroBusiness: HeroBusiness = new HeroBusiness();
      const output: OutputInformation = await heroBusiness.createHero(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (res.statusCode === 200) {
        res.status(500);
      }

      if (error instanceof Error) {
        res.send(error.message);
      } else {
        res.send("Erro inesperado");
      }
    }
  };
}
