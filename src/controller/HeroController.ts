import { Request, Response } from "express";
import { HeroBusiness } from "../business/HeroBusiness";
export class HeroController {
  public getHeroes = async (req: Request, res: Response) => {
    try {
      const input: any = {
        q: req.query.q as string | undefined,
      };

      const heroBusiness = new HeroBusiness();
      const output = await heroBusiness.getHeroes(input);

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
