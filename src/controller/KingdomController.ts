import { Request, Response } from "express";
import { KingdomBusiness } from "../business/KingdomBusiness";
import { Kingdom } from "../models/Kingdom";
export class KingdomController {
  public getKingdoms = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: any = { q: req.query.q as any };

      const kingdomBusiness: KingdomBusiness = new KingdomBusiness();
      const output: any[] = await kingdomBusiness.getKingdom(input);

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

  public createKingdom = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: any = {
        id: req.body.id,
        name: req.body.name,
        age: req.body.age,
        kingdom_hero: req.body.kingdom_age,
      };

      const kingdomBusiness: KingdomBusiness = new KingdomBusiness();
      const output: any = await kingdomBusiness.createKingdom(
        input
      );

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
