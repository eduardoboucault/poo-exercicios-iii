import { BaseDatabase } from "./BaseDatabase";
export class KingdomDatabase extends BaseDatabase {
  public static TABLE_KINGDOM = "kingdoms";

  public findKingdom = async (input: any): Promise<any[]> => {
    let kingdomDB;

    if (input.q) {
      const result: any[] = await BaseDatabase.conection(
        KingdomDatabase.TABLE_KINGDOM
      ).where("name", "LIKE", `%${input.q}%`);
      kingdomDB = result;
    } else {
      const result: any[] = await BaseDatabase.conection(
        KingdomDatabase.TABLE_KINGDOM
      );
      kingdomDB = result;
    }
    return kingdomDB;
  };

  public findKingdomById = async (id: string): Promise<any | undefined> => {
    const [result]: any[] | undefined[] = await BaseDatabase.conection(
      KingdomDatabase.TABLE_KINGDOM
    ).where({ id });
    return result;
  };

  public insertKingdom = async (newKingdom: any): Promise<void> => {
    await BaseDatabase.conection(KingdomDatabase.TABLE_KINGDOM).insert(
      newKingdom
    );
  };
}
