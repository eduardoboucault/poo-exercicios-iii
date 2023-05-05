import { Request, Response } from "express";
import { BattleBusiness } from "../business/BattleBusiness";

export class BattleController {
  public getBattles = async (req: Request, res: Response) => {
    try {
      const input = {
        q: req.query.q as string | undefined,
      };

      const battleBusiness = new BattleBusiness();
      const output = await battleBusiness.getBattles(input);

      res.status(200).send(output);
    } catch (error) {}
  };
}
