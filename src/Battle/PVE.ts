import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  private _player: Fighter;
  private _monsters: SimpleFighter[];
  constructor(player: Fighter, monsters: SimpleFighter[]) {
    super(player);
    this._player = player;
    this._monsters = monsters;
  }

  // isBattleOver(monster: SimpleFighter): boolean {
  //   if (this._player.lifePoints === -1 || monster.lifePoints === -1) {
  //     return true;
  //   }
  //   return false;
  // }

  // fight(): number {
  //   this._monsters.forEach((monster) => {
  //     while (!this.isBattleOver(monster)) {
  //       this._player.attack(monster);
  //       monster.attack(this.player);
  //     }
  //   });
  //   return this._player.lifePoints === -1 ? -1 : 1;
  // }
}