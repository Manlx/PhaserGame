import { Player } from "./player"

export class CameraControler {

  static Camera: Phaser.Cameras.Scene2D.Camera

  static UpdateLoop(Scene: Phaser.Scene){

    const playerCenterCords = Player.Sprite.getCenter();
    Scene.cameras.cameras[0].centerOn(playerCenterCords.x,playerCenterCords.y)

  }
}