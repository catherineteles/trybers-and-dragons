import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _createdRangers = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdRangers += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdRangers;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;