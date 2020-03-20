export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainMenu' });
  }
  preload() {

  }

  create() {
   // this.add.image(this.game.renderer.width / 1.81, this.game.renderer.height * 0.21, "logo").setDepth(1);
    this.add.image(0, 0, "menu_fondo").setOrigin(0).setDepth(0);

    //botones
    let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play_button").setDepth(1);
    let rulesButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 80, "rules_button").setDepth(1);
    let creditsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 160, "credits_button").setDepth(1);

    //sprites
    let hoverSprite = this.add.sprite(100, 100, "bruja");
    hoverSprite.setScale(0.5);
    hoverSprite.setVisible(false);

    playButton.setInteractive();
    playButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.x =playButton.x -playButton.width/2;
      hoverSprite.y=playButton.y;
    });
    playButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });

  }
  update() {
    console.log("update");
  }
}