import { Player } from "./player";

export class CameraControler {

  static Camera: Phaser.Cameras.Scene2D.Camera;

  static cursorInput: Phaser.Types.Input.Keyboard.CursorKeys ;

  static Init(Scene: Phaser.Scene){

    // this.cursorInput = Scene.input.keyboard.cre;

    Scene.cameras.main.centerOnY(Player.Sprite.body.position.y);

  }

  static UpdateLoop(Scene: Phaser.Scene){

    Scene.cameras.main.centerOnX(Player.Sprite.body.position.x);

    if (!Scene.cameras.main.worldView.contains(Player.Sprite.body.position.x, Player.Sprite.body.position.y)){

      Scene.cameras.main.centerOnY(Player.Sprite.body.position.y);
    }
    // Player.Sprite.body.
  }
}