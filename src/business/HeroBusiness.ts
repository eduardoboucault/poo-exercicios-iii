import { HeroDatabase } from "../database/HeroDatabase";
import {
  CreateHeroInputDTO,
  CreateHeroOutputDTO,
} from "../dtosHero/createHero.dto";
import {
  EditHeroInputDTO,
  EditHeroOutputDTO,
  EditedHeroOutputDTO,
} from "../dtosHero/editHero.dto";
import { BadRequest } from "../errors/BadRequest";
import { Hero } from "../models/Hero";
import { GetInputHero, HeroDB } from "../types/heroTypes";
export class HeroBusiness {
  constructor(private heroDatabase: HeroDatabase) {}
  public getHeroes = async (input: GetInputHero): Promise<Hero[]> => {
    const heroesDB: HeroDB[] = await this.heroDatabase.findHero(input);

    const heroes = heroesDB.map(
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

  public createHero = async (
    input: CreateHeroInputDTO
  ): Promise<CreateHeroOutputDTO> => {
    const { id, name, hero_class, kingdom, race } = input;

    const heroDBexist: HeroDB | undefined =
      await this.heroDatabase.findHeroById(id);

    if (heroDBexist) {
      throw new BadRequest(
        `Não é possível criar novo herói com ID já existente.`
      );
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

    await this.heroDatabase.insertHero(newHeroDB);

    const output: CreateHeroOutputDTO = {
      message: "Cadastro realizado com sucesso",
      hero: {
        id: newHero.getId(),
        name: newHero.getName(),
        hero_class: newHero.getHeroClass(),
        kingdom: newHero.getKingdom(),
        race: newHero.getRace(),
        created_at: newHero.getCreatedAt(),
      },
    };

    return output;
  };

  public editHero = async (input: EditHeroInputDTO) => {
    const { id, name, hero_class, kingdom, race } = input;

    const heroDBexist: HeroDB | undefined =
      await this.heroDatabase.findHeroById(id);

    if (!heroDBexist) {
      throw new Error("VC XUXOU ID ERRADO");
    }

    const newEditHero: Hero = new Hero(
      heroDBexist.id,
      heroDBexist.name,
      heroDBexist.hero_class,
      heroDBexist.kingdom,
      heroDBexist.race,
      heroDBexist.created_at
    );

    newEditHero.setName(name);
    newEditHero.setHeroClass(hero_class);
    newEditHero.setKingdom(kingdom);
    newEditHero.setRace(race);

    const newHeroDB: EditedHeroOutputDTO = {
      name: newEditHero.getName(),
      hero_class: newEditHero.getHeroClass(),
      kingdom: newEditHero.getKingdom(),
      race: newEditHero.getRace(),
    };

    await this.heroDatabase.updateHero(newHeroDB, id);

    const output: EditHeroOutputDTO = {
      message: "VC XUXOU O HERÓI",
      editedHero: {
        name: newEditHero.getName(),
        hero_class: newEditHero.getHeroClass(),
        kingdom: newEditHero.getKingdom(),
        race: newEditHero.getRace(),
      },
    };

    return output;
  };
}
