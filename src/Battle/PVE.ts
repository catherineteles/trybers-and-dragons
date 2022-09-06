import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(player: Fighter, private monsters: SimpleFighter[]) {
    super(player);
  }

  // isBattleOver(): boolean {
  //   if (this.player.lifePoints === -1 || this.monsters
  //     .some((monster) => monster.lifePoints === -1)) {
  //     return true;
  //   }
  //   return false;
  // }

  // fight(): number {
  //   while (this.player.lifePoints !== -1 || this.monsters
  //     .every((monster) => monster.lifePoints !== -1)) {
  //     this.monsters.forEach((monster) => {
  //       this.player.attack(monster);
  //       monster.attack(this.player);
  //     });
  //   }
  //   return this.player.lifePoints === -1 ? -1 : 1;
  // }
}