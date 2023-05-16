import { EditedHeroOutputDTO } from "../dtosHero/editHero.dto";
import { GetInputHero, HeroDB } from "../types/heroTypes";
import { BaseDatabase } from "./BaseDatabase";
export class HeroDatabase extends BaseDatabase {
  public static TABLE_HEROES = "heroes";

  public findHero = async (input: GetInputHero): Promise<HeroDB[]> => {
    let heroesDB;

    if (input.q) {
      const result: HeroDB[] = await BaseDatabase.conection(
        HeroDatabase.TABLE_HEROES
      ).where("name", "LIKE", `%${input.q}%`);
      heroesDB = result;
    } else {
      const result: HeroDB[] = await BaseDatabase.conection(
        HeroDatabase.TABLE_HEROES
      );
      heroesDB = result;
    }

    return heroesDB;
  };

  public findHeroById = async (id: string): Promise<HeroDB | undefined> => {
    const [result]: HeroDB[] | undefined[] = await BaseDatabase.conection(
      HeroDatabase.TABLE_HEROES
    ).where({ id });
    return result;
  };

  public insertHero = async (NewHero: HeroDB): Promise<void> => {
    await BaseDatabase.conection(HeroDatabase.TABLE_HEROES).insert(NewHero);
  };

  public updateHero = async (
    NewHero: EditedHeroOutputDTO,
    id: string
  ): Promise<void> => {
    await BaseDatabase.conection(HeroDatabase.TABLE_HEROES)
      .update(NewHero)
      .where({ id });
  };
}
