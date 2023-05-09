import { HeroDatabase } from "../database/HeroDatabase";
import { Hero } from "../models/Hero";
import {
  HeroDB,
  HeroDBpost,
  InputHero,
  InputQuery,
  OutputInformation,
} from "../types/types";
export class HeroBusiness {
  public getHeroes = async (input: InputQuery): Promise<Hero[]> => {
    const heroDatabase: HeroDatabase = new HeroDatabase();
    const heroesDB: HeroDB[] = await heroDatabase.findHero(input);

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

    const output: Hero[] = heroes;
    return output;
  };

  public createHero = async (input: InputHero): Promise<OutputInformation> => {
    const { id, name, hero_class, kingdom, race, created_at } = input;

    if (
      typeof id !== "string" ||
      typeof name !== "string" ||
      typeof hero_class !== "string" ||
      typeof kingdom !== "string" ||
      typeof race !== "string" ||
      typeof created_at !== "string"
    ) {
      throw new Error(`Por favor insira corretamente todos os dados`);
    }

    const heroDatabase: HeroDatabase = new HeroDatabase();
    const heroDBexist: HeroDBpost | undefined = await heroDatabase.findHeroById(
      id
    );

    if (heroDBexist) {
      throw new Error(`Não é possível criar novo herói com ID já existente.`);
    }

    const newHero: Hero = new Hero(
      id,
      name,
      hero_class,
      kingdom,
      race,
      new Date().toISOString()
    );

    const newHeroDB: HeroDB = {
      id: newHero.getId(),
      name: newHero.getName(),
      hero_class: newHero.getHeroClass(),
      kingdom: newHero.getKingdom(),
      race: newHero.getRace(),
      created_at: newHero.getCreatedAt(),
    };

    await heroDatabase.insertHero(newHeroDB);

    const output: OutputInformation = {
      message: "Cadastro realizado com sucesso",
      information: newHero,
    };

    return output;
  };
}
