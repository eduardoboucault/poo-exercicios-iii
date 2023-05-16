import { BaseDatabase } from "./BaseDatabase";

export class BattleDatabase extends BaseDatabase {
  public static TABLE_BATTLE = "battles";

  public findKingdom = async (input: any): Promise<any> => {
    let kingdomsDB;
    if (input.q) {
      const result: any[] = await BaseDatabase.conection(
        BattleDatabase.TABLE_BATTLE
      ).where("location", "LIKE", `%${input.q}%`);
      kingdomsDB = result;
    } else {
      const result: any[] = await BaseDatabase.conection(
        BattleDatabase.TABLE_BATTLE
      );
      kingdomsDB = result;
    }
    return kingdomsDB;
  };

  public findKingdomById = async (
    id: string
  ): Promise<any | undefined> => {
    const [result]: any[] | undefined[] = await BaseDatabase.conection(
      BattleDatabase.TABLE_BATTLE
    ).where({ id });
    return result;
  };

  public insertBattle = async (newBattle: any) => {
    await BaseDatabase.conection(BattleDatabase.TABLE_BATTLE).insert(newBattle);
  };
}
