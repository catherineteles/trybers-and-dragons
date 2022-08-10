// import Character from '../Character';
import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _player1: Fighter;
  private _player2: Fighter;
  constructor(protected player1: Fighter, protected player2: Fighter) {
    super(player1);
    this._player1 = player1;
    this._player2 = player2;
  }

  isBattleOver(): boolean {
    if (this.player1.lifePoints === -1 || this.player2.lifePoints === -1) {
      return true;
    }
    return false;
  }

  fight(): number {
    while (!this.isBattleOver()) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    }
    return this.player1.lifePoints === -1 ? -1 : 1;
  }
}