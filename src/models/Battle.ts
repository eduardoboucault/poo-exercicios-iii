export class Battle {
  constructor(
    private id: string,
    private location: string,
    private date: string,
    private winner_id: string,
    private loser_id: string,
    private kingdom_id: string
  ) {}

  public getId(): string {
    return this.id;
  }
  public setId(newId: string): void {
    this.id = newId;
  }
  public getLocation(): string {
    return this.location;
  }
  public setLocation(newLocation: string): void {
    this.location = newLocation;
  }
  public getDate(): string {
    return this.date;
  }
  public setDate(newDate: string): void {
    this.date = newDate;
  }
  public getWinnerId(): string {
    return this.winner_id;
  }
  public setWinnerId(newWinnerId: string): void {
    this.winner_id = newWinnerId;
  }
  public getLoserId(): string {
    return this.loser_id;
  }
  public setLoserId(newLoserId: string): void {
    this.loser_id = newLoserId;
  }
  public getKingdomId(): string {
    return this.kingdom_id;
  }
  public setKingdomId(newKingdomId: string): void {
    this.kingdom_id = newKingdomId;
  }
}
