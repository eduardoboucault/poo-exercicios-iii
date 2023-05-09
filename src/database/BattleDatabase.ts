import { BaseDatabase } from "./BaseDatabase";
import { BattleDB, BattleDBpost, InputQuery } from "../types/types";

export class BattleDatabase extends BaseDatabase {
  public static TABLE_BATTLE = "battles";

  public findKingdom = async (q: InputQuery): Promise<BattleDB[]> => {
    let kingdomsDB;
    if (q) {
      const result: BattleDB[] = await BaseDatabase.conection(
        BattleDatabase.TABLE_BATTLE
      ).where("name", "LIKE", `%${q}%`);
      kingdomsDB = result;
    } else {
      const result: BattleDB[] = await BaseDatabase.conection(
        BattleDatabase.TABLE_BATTLE
      );
      kingdomsDB = result;
    }
    return kingdomsDB;
  };

  public findKingdomById = async (
    id: string
  ): Promise<BattleDBpost | undefined> => {
    const [result]: BattleDBpost[] | undefined[] = await BaseDatabase.conection(
      BattleDatabase.TABLE_BATTLE
    ).where({ id });
    return result;
  };

  public insertBattle = async (newBattle: any) => {
    await BaseDatabase.conection(BattleDatabase.TABLE_BATTLE).insert(newBattle);
  };
}
