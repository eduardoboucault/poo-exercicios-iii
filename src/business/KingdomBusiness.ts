import { KingdomDatabase } from "../database/KingdomDatabase";
import { Kingdom } from "../models/Kingdom";
export class KingdomBusiness {
  public getKingdom = async (input: any): Promise<Kingdom[]> => {
    const kingdomDatabase: KingdomDatabase = new KingdomDatabase();
    const kingdomsDB: any[] = await kingdomDatabase.findKingdom(input);

    const kingdoms: any[] = kingdomsDB.map(
      (kingdomDB) =>
        new Kingdom(
          kingdomDB.id,
          kingdomDB.name,
          kingdomDB.age,
          kingdomDB.kingdom_hero
        )
    );

    const output: Kingdom[] = kingdoms;
    return output;
  };

  public createKingdom = async (
    input: any
  ): Promise<any> => {
    const { id, name, age, kingdom_hero } = input;
    console.log(input)
    if (
      typeof id !== "string" ||
      typeof name !== "string" ||
      typeof age !== "number" ||
      typeof kingdom_hero !== "string"
    ) {
      throw new Error("Por favor insira corretamente todos os dados");
    }

    const kingdomDatabase: KingdomDatabase = new KingdomDatabase();
    const kingdomDBexist: any | undefined =
      await kingdomDatabase.findKingdomById(id);

    if (kingdomDBexist) {
      throw new Error("ID de Reino já existente.");
    }

    const newKingdom: Kingdom = new Kingdom(id, name, age, kingdom_hero);

    const newKingdomDB: any = {
      id: newKingdom.getId(),
      name: newKingdom.getName(),
      age: newKingdom.getAge(),
      kingdom_hero: newKingdom.getKingdomHero(),
    };

    await kingdomDatabase.insertKingdom(newKingdomDB);

    const output: any = {
      message: "Novo reino cadastrado.",
      information: newKingdom,
    };

    return output;
  };
}
