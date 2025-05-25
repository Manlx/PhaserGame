const AssetsKey = {
  Wall: {
    key: 'WallTexture',
    path: 'assets/Wall.png'
  } as const
} as const;

export class Wall {

  static get AssetsKey(){ return AssetsKey;}

  parent: Phaser.Scene;

  constructor(Scene: Phaser.Scene){

    this.parent = Scene;
  }
}