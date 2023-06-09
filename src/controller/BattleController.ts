import { Request, Response } from "express";
import { BattleBusiness } from "../business/BattleBusiness";
import { Battle } from "../models/Battle";
export class BattleController {
  public getBattles = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: any = {
        q: req.query.q as string | undefined,
      };

      const battleBusiness: BattleBusiness = new BattleBusiness();
      const output: any[] = await battleBusiness.getBattles(input);

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

  public createBattle = async (req: Request, res: Response): Promise<void> => {
    try {
      const input: any = {
        id: req.body.id,
        location: req.body.location,
        date: req.body.date,
        winner_id: req.body.winner_id,
        loser_id: req.body.loser_id,
        kingdom_id: req.body.kingdom_id,
      };

      const battleBusiness: BattleBusiness = new BattleBusiness();
      const output: any = await battleBusiness.createBattle(
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
