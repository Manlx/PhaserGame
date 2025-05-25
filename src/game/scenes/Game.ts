import { Scene } from 'phaser';
import { Player } from '../classes/player';
import { Wall } from '../classes/wall';
import { CameraControler } from '../classes/CameraControler';

const PlatFormLocations = [
  [0, 1290],
  [410, 1020],
  [837, 720],
  [520, 350],
  [880, 150],
  [1680, 1180],
  [1960, 820],
  [1664, 410],
  [1960, 0],
];

export class Game extends Scene
{
  colorStage :number;

  Walls: Phaser.Physics.Arcade.StaticGroup | undefined;
  Platforms: Phaser.Physics.Arcade.StaticGroup | undefined;

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

    this.load.image(Wall.AssetsKey.PlatformHorizontal.key, Wall.AssetsKey.PlatformHorizontal.path);

    this.load.image('Background', 'assets/bg.png');

    this.Walls = this.physics.add.staticGroup();
    this.Platforms = this.physics.add.staticGroup();
  };

  create(){
    this.add.image(-1000,-1000,'Background').setOrigin(0,0).setScale(10);
    
    Player.Init(this);
    
    CameraControler.Init(this);

    if (this.Walls){

      // (this.Walls.create(0,1100,Wall.AssetsKey.Wall.key) as Phaser.Physics.Arcade.Sprite).setOrigin(0,0).refreshBody();
      (this.Walls.create(0,1400,Wall.AssetsKey.Wall.key) as Phaser.Physics.Arcade.Sprite).setOrigin(0,0).refreshBody();

  
      this.physics.add.collider(Player.Sprite, this.Walls);
    }

    if (this.Platforms) {

      console.log('Adding Platforms');
      for (let i = 0; i < PlatFormLocations.length; i ++) {

        const currentLoc = PlatFormLocations[i];

        (this.Platforms.create(currentLoc[0],currentLoc[1],Wall.AssetsKey.PlatformHorizontal.key) as Phaser.Types.Physics.Arcade.SpriteWithStaticBody).setOrigin(0,0).refreshBody();
      }

      this.physics.add.collider(Player.Sprite, this.Platforms);
    }
  };

  update = () => {
    
    Player.UpdateLoop();
    
    // FSPCounter.UpdateLoop();

    CameraControler.UpdateLoop(this);

  };
}