import Race from './Race';

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _createdHalflings = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
    Halfling._createdHalflings += 1;
  }

  static createdRacesInstances(): number {
    return this._createdHalflings;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;