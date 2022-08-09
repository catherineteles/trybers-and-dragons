import Race from './Race';

class Elf extends Race {
  private _maxLifePoints: number;
  private static _createdElfs = 0;

  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 90;
    Elf._createdElfs += 1;
  }

  static createdRacesInstances(): number {
    return this._createdElfs;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;