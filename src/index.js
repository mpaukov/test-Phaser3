import Phaser from "phaser";

let capguy;

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    this.load.multiatlas("cityscene", "assets/cityscene.json", "assets");
  }

  create() {
    let background = this.add.sprite(0, 0, "cityscene", "background.png");
    capguy = this.add.sprite(0, 400, "cityscene", "capguy/walk/0001.png");
    capguy.setScale(0.5, 0.5);

    let frameNames = this.anims.generateFrameNames("cityscene", {
      start: 1,
      end: 8,
      zeroPad: 4,
      prefix: "capguy/walk/",
      suffix: ".png",
    });
    this.anims.create({
      key: "walk",
      frames: frameNames,
      frameRate: 10,
      repeat: -1,
    });
    capguy.anims.play("walk");
  }

  update(time, delta) {
    capguy.x += delta / 8;
    if (capguy.x > 800) {
      capguy.x = -50;
    }
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 800,
  height: 600,
  scene: MyGame,
};

const game = new Phaser.Game(config);
