const AssetsKey = {
  Wall: {
    key: 'WallTexture',
    path: 'assets/Ground.svg'
  } as const,
  PlatformHorizontal: {
    key: 'HorizontalTexture',
    path: 'assets/HorizontalPlatform.svg'
  }
} as const;

export class Wall {

  static get AssetsKey(){ return AssetsKey;}

  parent: Phaser.Scene;

  constructor(Scene: Phaser.Scene){

    this.parent = Scene;
  }
}