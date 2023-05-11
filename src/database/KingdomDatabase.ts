import { BaseDatabase } from "./BaseDatabase";
import { InputQuery, KingdomDB } from "../types/types";
export class KingdomDatabase extends BaseDatabase {
  public static TABLE_KINGDOM = "kingdoms";

  public findKingdom = async (input: InputQuery): Promise<KingdomDB[]> => {
    let kingdomDB;

    if (input.q) {
      const result: KingdomDB[] = await BaseDatabase.conection(
        KingdomDatabase.TABLE_KINGDOM
      ).where("name", "LIKE", `%${input.q}%`);
      kingdomDB = result;
    } else {
      const result: KingdomDB[] = await BaseDatabase.conection(
        KingdomDatabase.TABLE_KINGDOM
      );
      kingdomDB = result;
    }
    return kingdomDB;
  };

  public findKingdomById = async (
    id: string
  ): Promise<KingdomDB | undefined> => {
    const [result]: KingdomDB[] | undefined[] = await BaseDatabase.conection(
      KingdomDatabase.TABLE_KINGDOM
    ).where({ id });
    return result;
  };

  public insertKingdom = async (newKingdom: KingdomDB): Promise<void> => {
    await BaseDatabase.conection(KingdomDatabase.TABLE_KINGDOM).insert(
      newKingdom
    );
  };
}
