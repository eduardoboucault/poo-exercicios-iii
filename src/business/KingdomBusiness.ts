import { KingdomDatabase } from "../database/KingdomDatabase";
import { Kingdom } from "../models/Kingdom";
export class KingdomBusiness {

//* Método assíncrono que chama banco de dados;

  public getKingdom = async (input: any) => {
    
    const { q } = input;

    const kingdomDatabase = new KingdomDatabase();
    const kingdomsDB = await kingdomDatabase.findKingdom(q);

    const kingdoms: Kingdom[] = kingdomsDB.map(
      (kingdomDB) =>
        new Kingdom(
          kingdomDB.id,
          kingdomDB.name,
          kingdomDB.age,
          kingdomDB.kingdom_hero
        )
    );

    const output: any = kingdoms;
    return output;
  };
}
