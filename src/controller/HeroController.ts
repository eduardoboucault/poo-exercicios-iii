import { Request, Response } from "express";
import { HeroBusiness } from "../business/HeroBusiness";
export class HeroController {

  //* É responsável por MODELAR o input recebido;

  public getHeroes = async (req: Request, res: Response) => {

    try {
      const input: any = {
        q: req.query.q as string | undefined,
      };
      
  //* Instanciar a próxima camada responsável;

      const heroBusiness = new HeroBusiness();

  //* Gerar a minha resposta;

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
