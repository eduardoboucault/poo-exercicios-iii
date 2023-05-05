export class Hero {
  constructor(
    private id: string,
    private name: string,
    private hero_class: string,
    private kingdom: string,
    private race: string,
    private created_at: string
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

  public getHeroClass(): string {
    return this.hero_class;
  }

  public setHeroClass(newHeroClass: string): void {
    this.hero_class = newHeroClass;
  }

  public getKingdom(): string {
    return this.kingdom;
  }

  public setKingdom(newKingdom: string): void {
    this.kingdom = newKingdom;
  }

  public getRace(): string {
    return this.race;
  }

  public setRace(newRace: string): void {
    this.race = newRace;
  }

  public getCreatedAt(): string {
    return this.created_at;
  }

  public setCreatedAt(newCreatedAt: string): void {
    this.created_at = newCreatedAt;
  }
}
