import { KingdomDatabase } from "../database/KingdomDatabase";
import { Kingdom } from "../models/Kingdom";
import { InputKingdom } from "../types/types";
import { InputQuery, KingdomDB, OutputInformation } from "../types/types";
export class KingdomBusiness {
  public getKingdom = async (input: InputQuery): Promise<Kingdom[]> => {
    const kingdomDatabase: KingdomDatabase = new KingdomDatabase();
    const kingdomsDB: KingdomDB[] = await kingdomDatabase.findKingdom(input);

    const kingdoms: Kingdom[] = kingdomsDB.map(
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
    input: InputKingdom
  ): Promise<OutputInformation> => {
    const { id, name, age, kingdom_hero } = input;

    if (
      typeof id !== "string" ||
      typeof name !== "string" ||
      typeof age !== "string" ||
      typeof kingdom_hero !== "string"
    ) {
      throw new Error("Por favor insira corretamente todos os dados");
    }

    const kingdomDatabase: KingdomDatabase = new KingdomDatabase();
    const kingdomDBexist: KingdomDB | undefined =
      await kingdomDatabase.findKingdomById(id);

    if (kingdomDBexist) {
      throw new Error("ID de Reino já existente.");
    }

    const newKingdom: Kingdom = new Kingdom(id, name, age, kingdom_hero);

    const newKingdomDB: KingdomDB = {
      id: newKingdom.getId(),
      name: newKingdom.getName(),
      age: newKingdom.getAge(),
      kingdom_hero: newKingdom.getKingdomHero(),
    };

    await kingdomDatabase.insertKingdom(newKingdomDB);

    const output: OutputInformation = {
      message: "Novo reino cadastrado.",
      information: newKingdom,
    };

    return output;
  };
}
