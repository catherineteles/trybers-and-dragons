import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _createdWarriors = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdWarriors += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdWarriors;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;