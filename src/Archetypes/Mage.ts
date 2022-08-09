import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _createdMages = 0;

  constructor(
    name: string,
  ) {
    super(name);
    this._energyType = 'mana';
    Mage._createdMages += 1;
  }

  static createdArchetypeInstances(): number {
    return this._createdMages;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;