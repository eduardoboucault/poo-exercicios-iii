export class Kingdom {
  constructor(
    private id: string,
    private name: string,
    private age: number,
    private kingdom_hero: string
  ) {}

  public getId(): string {
    return this.id;
  }

  public setId(newId: string): void {
    this.id = newId;
  }

  public getName(): string {
    return this.name;
  }

  public setName(newName: string): void {
    this.name = newName;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(newAge: number): void {
    this.age = newAge;
  }

  public getKingdomHero(): string {
    return this.kingdom_hero;
  }

  public setKingdomHero(newKingdomHero: string): void {
    this.kingdom_hero = newKingdomHero;
  }
}
