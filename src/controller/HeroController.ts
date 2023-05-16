import { Request, Response } from "express";
import { HeroBusiness } from "../business/HeroBusiness";
import { BaseError } from "../errors/BaseError";
import { CreateHeroSchema } from "../dtosHero/createHero.dto";
import { ZodError } from "zod";
import { Hero } from "../models/Hero";
import { GetInputHero } from "../types/heroTypes";
import { EditHeroOutputDTO, EditHeroSchema } from "../dtosHero/editHero.dto";
export class HeroController {
  constructor(private heroBusiness: HeroBusiness) {}

  public getHeroes = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: GetInputHero = { q: req.query.q as string };

      const output: Hero[] = await this.heroBusiness.getHeroes(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.send(500).send("Erro inesperado");
      }
    }
  };

  public createHero = async (req: Request, res: Response) => {
    try {
      const input = CreateHeroSchema.parse({
        id: req.body.id,
        name: req.body.name,
        hero_class: req.body.hero_class,
        kingdom: req.body.kingdom,
        race: req.body.race,
        created_at: req.body.created_at,
      });

      const output = await this.heroBusiness.createHero(input);

      res.status(201).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof ZodError) {
        res.status(400).send(error.issues);
      } else if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.status(500).send("Erro inesperado");
      }
    }
  };
  public editHero = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = EditHeroSchema.parse({
        id: req.params.id,
        name: req.body.name,
        hero_class: req.body.hero_class,
        kingdom: req.body.kingdom,
        race: req.body.race,
      });
      console.log("CONTROLLER INPUT", input);
      const output: EditHeroOutputDTO = await this.heroBusiness.editHero(input);

      res.status(200).send(output);
    } catch (error) {
      console.log(error);

      if (error instanceof BaseError) {
        res.status(error.statusCode).send(error.message);
      } else {
        res.send(500).send("Erro inesperado");
      }
    }
  };

  public deleteHero() {}
}
