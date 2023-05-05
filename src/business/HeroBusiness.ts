import { HeroDatabase } from "../database/HeroDatabase";
import { Hero } from "../models/Hero";
export class HeroBusiness {
  public getHeroes = async (input: any) => {
    const { q } = input;

    const heroDatabase = new HeroDatabase();
    const heroesDB = await heroDatabase.findHero(q);

    const heroes: Hero[] = heroesDB.map(
      (heroDB) =>
        new Hero(
          heroDB.id,
          heroDB.name,
          heroDB.hero_class,
          heroDB.kingdom,
          heroDB.race,
          heroDB.created_at
        )
    );

    const output: any = heroes;
    return output;
  };
}
