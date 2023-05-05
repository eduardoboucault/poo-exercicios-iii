import { BaseDatabase } from "./BaseDatabase";
import { HeroDB } from "../types/types";
export class HeroDatabase extends BaseDatabase {
  public static TABLE_HEROES = "heroes";

  public findHero = async (q: any) => {
    let heroesDB;

    if (q) {
      const result: HeroDB[] = await HeroDatabase.conection(
        HeroDatabase.TABLE_HEROES
      ).where("name", "LIKE", `%${q}%`);
      heroesDB = result;
    } else {
      const result: HeroDB[] = await HeroDatabase.conection(
        HeroDatabase.TABLE_HEROES
      );
      heroesDB = result;
    }
    return heroesDB;
  };
}
