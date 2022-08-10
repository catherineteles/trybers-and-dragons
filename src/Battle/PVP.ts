import Character from '../Character';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected player1: Character, protected player2: Character) {
    super(player1);
  }
}