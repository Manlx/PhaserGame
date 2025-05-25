import { Scene } from "phaser";

const Assets = {
  MainTexture: {
    path: 'assets/PlayerSprite.png' as const,
    key: 'MainTexture' as const
  } as const
} as const;


const Keys = {
  PlayerKey: 'Player'
} as const;

export class Player {

  static get Assets(){
    
    return Assets;
  }

  static get Keys(){
    
    return Keys;
  }

  static JumpMultiplier = 3;

  static BaseMovementSpeed = 300;

  static MovementSpeedMultiplier = 1;

  static DefaultBounce = 0.2;

  static get MovementSpeed() {

    return Player.BaseMovementSpeed * Player.MovementSpeedMultiplier;
  }

  static cursorInput: Phaser.Types.Input.Keyboard.CursorKeys ;

  static PreLoad(Scene: Scene){

    Scene.load.image(Player.Assets.MainTexture.key, Player.Assets.MainTexture.path);
  }

  static Init(Scene: Scene){

    Player.cursorInput = Scene.input.keyboard!.createCursorKeys();

    Player.Sprite = Scene.physics.add.sprite(1500,1000,Player.Assets.MainTexture.key).setScale(0.5).setOrigin(0,0).refreshBody();

    Player.Sprite.setBounce(this.DefaultBounce);

    Player.Sprite.setDamping(true);

    Player.Sprite.body.setGravityY(300);

    Player.Sprite.body.setDragX(0.01);

  }

  static Sprite: Phaser.Types.Physics.Arcade.SpriteWithDynamicBody;

  static UpdateLoop(){

    Player.Sprite.body.allowGravity = !(Player.Sprite.body?.blocked.left || Player.Sprite.body?.blocked.right);

    if (Player.cursorInput.down.isDown){

      // Player.Sprite.setVelocityY(Player.MovementSpeed);
      Player.Sprite.body.setBounce(0);
      
    }
    else {
      Player.Sprite.body.setBounce(this.DefaultBounce);

      if (Player.Sprite.body?.blocked.left || Player.Sprite.body?.blocked.right){

        if (Player.Sprite.body.velocity.y > -100 ){

          Player.Sprite.body.setVelocityY(-100);
        }
      }
    }

    if (Player.cursorInput.up.isDown && (Player.Sprite.body?.blocked.down || Player.Sprite.body?.blocked.left || Player.Sprite.body?.blocked.right)){

      Player.Sprite.setVelocityY(-Player.MovementSpeed * Player.JumpMultiplier);
    }

    if (Player.cursorInput.left.isDown){

      Player.Sprite.setVelocityX(-Player.MovementSpeed);
    }

    if (Player.cursorInput.right.isDown){

      Player.Sprite.setVelocityX(Player.MovementSpeed);
    }
  }
}