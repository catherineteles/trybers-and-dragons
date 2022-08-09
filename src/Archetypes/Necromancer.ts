import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  private _energyType: EnergyType;
  private static _createdNecromancers = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'mana';
    Necromancer._createdNecromancers += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdNecromancers;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;