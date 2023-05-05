import { Request, Response } from "express";
import { KingdomBusiness } from "../business/KingdomBusiness";

export class KingdomController {

//* Métodos que modelem input/objetos requisitados;

  public getKingdoms = async (req: Request, res: Response) => {


//* Const input no formato objeto recebido;

    try {
      const input: any = {
        q: req.query.q as string | undefined
      };

//* Instância da próxima camada chamando método para buscar input;

//* Toda variável output espera receber um retorno, ou seja, é necessário o uso do await;

      const kingdomBusiness = new KingdomBusiness();
      const output = await kingdomBusiness.getKingdom(input);

//* Devolver status e resultado;

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
