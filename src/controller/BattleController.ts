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
    } finally {
      
    }
  };
}
