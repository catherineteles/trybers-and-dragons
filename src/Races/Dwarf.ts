import Race from './Race';

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _createdDwarfs = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf._createdDwarfs += 1;
  }

  static createdRacesInstances(): number {
    return this._createdDwarfs;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;