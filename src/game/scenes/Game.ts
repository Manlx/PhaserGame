import { Scene } from 'phaser';
import { Player } from '../classes/player';
import { Wall } from '../classes/wall';
import { PlayerDevTools } from '../../devTools/PlayerDevTools';
import { CameraControler } from '../classes/camera';

export class Game extends Scene
{
  colorStage :number;

  Walls: Phaser.Physics.Arcade.StaticGroup | undefined;

  constructor ()
  {
    super('Game');
    this.colorStage = 0;
  }

  preload = () =>{
    //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
    //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

    this.load.image(Player.Assets.MainTexture.key, Player.Assets.MainTexture.path);
    this.load.image(Wall.AssetsKey.Wall.key, Wall.AssetsKey.Wall.path);

    this.Walls = this.physics.add.staticGroup();

    PlayerDevTools.Init();
  };

  create() {
    
    Player.Init(this);

    // FSPCounter.Init(this);

    if (this.Walls){

      (this.Walls.create(0,0,Wall.AssetsKey.Wall.key) as Phaser.Physics.Arcade.Sprite).setScale(0.5).setOrigin(0,0).refreshBody();
      (this.Walls.create(0,750,Wall.AssetsKey.Wall.key) as Phaser.Physics.Arcade.Sprite).setScale(0.5).setOrigin(0,0).refreshBody();
      (this.Walls.create(750,0,Wall.AssetsKey.Wall.key) as Phaser.Physics.Arcade.Sprite).setScale(0.5).setOrigin(0,0).refreshBody();
      (this.Walls.create(750,750,Wall.AssetsKey.Wall.key) as Phaser.Physics.Arcade.Sprite).setScale(0.5).setOrigin(0,0).refreshBody();
  
      this.physics.add.collider(Player.Sprite, this.Walls);
    }
  };

  update = () => {
    
    Player.UpdateLoop();
    
    // FSPCounter.UpdateLoop();

    CameraControler.UpdateLoop(this);

  };
}