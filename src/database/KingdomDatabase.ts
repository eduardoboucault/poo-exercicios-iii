import { BaseDatabase } from "./BaseDatabase";
import { KingdomDB } from "../types/types";
export class KingdomDatabase extends BaseDatabase {
  public static TABLE_KINGDOM = "kingdoms";

  public findKingdom = async (q: any) => {
    let kingdomDB;

    if (q) {
      const result: KingdomDB[] = await KingdomDatabase.conection(
        KingdomDatabase.TABLE_KINGDOM
      ).where("name", "LIKE", `%${q}%`);
      kingdomDB = result;
    } else {
      const result: KingdomDB[] = await KingdomDatabase.conection(
        KingdomDatabase.TABLE_KINGDOM
      )
      kingdomDB = result;
    }
    return kingdomDB;
  };
}
