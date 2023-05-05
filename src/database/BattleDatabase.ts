import { BaseDatabase } from "./BaseDatabase";
import { BattleDB } from "../types/types";

export class BattleDatabase extends BaseDatabase {
  public static TABLE_BATTLE = "battles";

  public findKingdom = async (q: any) => {
    let kingdomsDB;
    if (q) {
      const result: BattleDB[] = await BattleDatabase.conection(
        BattleDatabase.TABLE_BATTLE
      ).where("name", "LIKE", `%${q}%`);
      kingdomsDB = result;
    } else {
      const result: BattleDB[] = await BattleDatabase.conection(
        BattleDatabase.TABLE_BATTLE
      );
      kingdomsDB = result;
    }
    return kingdomsDB;
  };
}
