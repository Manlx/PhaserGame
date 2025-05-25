import { Game as MainGame } from './scenes/Game';
import { AUTO, Game } from 'phaser';

//  Find out more information about the Game Config at:
//  https://docs.phaser.io/api-documentation/typedef/types-core#gameconfig
const config: Phaser.Types.Core.GameConfig = {
  type: AUTO,
  width: 900,
  height: 900,
  parent: 'game-container',
  backgroundColor: '#232323',
  scene: [
    MainGame,
  ],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 300, x: 0 },
      debug: false
    }
  },
};

const StartGame = (parent: string) => {

  return new Game({ ...config, parent });

};

export default StartGame;
