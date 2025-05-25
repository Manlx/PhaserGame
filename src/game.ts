import Phaser from 'phaser';
import { Player } from './game/classes/player';

class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');

  }

  preload(){

    Player.PreLoad(this)
  }

  create(){

    Player.Init(this)
  }

  update(){

    Player.UpdateLoop()
  }
  
}

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1000,
  height: 900,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0, x: 0 },
      debug: false,
    },
  },
  scene: GameScene,
  parent: 'phaser-container',
};

export const createPhaserGame = () => new Phaser.Game(config);