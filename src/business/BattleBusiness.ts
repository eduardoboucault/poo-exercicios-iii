import { BattleDatabase } from "../database/BattleDatabase";
import { Battle } from "../models/Battle";
import {
  BattleDB,
  BattleDBpost,
  InputBattle,
  InputQuery,
  OutputInformation,
} from "../types/types";
export class BattleBusiness {
  public getBattles = async (input: InputQuery): Promise<Battle[]> => {
    const battleDatabase: BattleDatabase = new BattleDatabase();
    const battleDB: BattleDB[] = await battleDatabase.findKingdom(input);

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

    const output: Battle[] = battles;
    return output;
  };

  public createBattle = async (
    input: InputBattle
  ): Promise<OutputInformation> => {
    const { id, location, date, winner_id, loser_id, kingdom_id } = input;

    if (
      typeof id !== "string" ||
      typeof location !== "string" ||
      typeof date !== "string" ||
      typeof winner_id !== "string" ||
      typeof loser_id !== "string" ||
      typeof kingdom_id !== "string"
    ) {
    }

    const battleDatabase: BattleDatabase = new BattleDatabase();
    const battleDBexist: BattleDBpost | undefined =
      await battleDatabase.findKingdomById(id);

    if (battleDBexist) {
      throw new Error("ID de batalha já existente");
    }

    const newBattle: Battle = new Battle(
      id,
      location,
      date,
      winner_id,
      loser_id,
      kingdom_id
    );

    const newBattleDB: BattleDB = {
      id: newBattle.getId(),
      location: newBattle.getLocation(),
      date: newBattle.getDate(),
      winner_id: newBattle.getWinnerId(),
      loser_id: newBattle.getLoserId(),
      kingdom_id: newBattle.getKingdomId(),
    };

    await battleDatabase.insertBattle(newBattleDB);

    const output: OutputInformation = {
      message: "Nova batalha cadastrada com sucesso.",
      information: newBattle,
    };
    return output;
  };
}
