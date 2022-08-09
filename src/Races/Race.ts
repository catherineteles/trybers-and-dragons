export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;
  private static _createdRaces: 0;
  
  constructor(
    name: string,
    dexterity: number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
    Race._createdRaces += 1;
  }
    
  get name(): string {
    return this._name;
  }
    
  get dexterity(): number {
    return this._dexterity;
  }
    
  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}