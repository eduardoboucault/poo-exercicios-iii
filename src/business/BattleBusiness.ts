import { BattleDatabase } from "../database/BattleDatabase";
import { Battle } from "../models/Battle";
export class BattleBusiness {
  public getBattles = async (input: any) => {
    const { q } = input;

    const battleDatabase = new BattleDatabase();
    const battleDB = await battleDatabase.findKingdom(q);

    const battles: Battle[] = battleDB.map(
      (battleDB) =>
        new Battle(
          battleDB.id,
          battleDB.location,
          battleDB.date,
          battleDB.winner_id,
          battleDB.loser_id,
          battleDB.kingdom_id
        )
    );

    const output = battles;
    return output;
  };
}
