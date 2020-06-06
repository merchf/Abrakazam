export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainMenu' });
  }
  preload() {

  }
  init(music) {
    this.musicMenu = music;
  }

  create() {
    // this.add.image(this.game.renderer.width / 1.81, this.game.renderer.height * 0.21, "logo").setDepth(1);
    this.add.image(0, 0, "menu_fondo").setOrigin(0).setDepth(0);

    this.musicMenu.resume();
    //botones
    let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play_button").setDepth(1);
    let rulesButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 80, "rules_button").setDepth(1);
    let creditsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 160, "credits_button").setDepth(1);

    //hover botones
    let hoverSprite = this.add.sprite(90, 100, "bruja");
    // hoverSprite.setScale(0.5);
    hoverSprite.setVisible(false);


    playButton.setInteractive();
    playButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.x = playButton.x - playButton.width / 2;
      hoverSprite.y = playButton.y;
    });
    playButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });

    rulesButton.setInteractive();
    rulesButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.x = rulesButton.x - rulesButton.width / 2;
      hoverSprite.y = rulesButton.y;
    });
    rulesButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });

    creditsButton.setInteractive();
    creditsButton.on("pointerover", () => {
      hoverSprite.setVisible(true);
      hoverSprite.x = creditsButton.x - creditsButton.width / 2;
      hoverSprite.y = creditsButton.y;
    });
    creditsButton.on("pointerout", () => {
      hoverSprite.setVisible(false);
    });

    //acciones al clicar


    // pointerUp(playButton, 'level1');
    // pointerUp(rulesButton, 'rules');
    //pointerUp(creditsButton, 'credits');
    playButton.on("pointerup", () => {
      this.scene.start('prologo');
      this.musicMenu.destroy();
     // this.scene.start("prologoBeforeMrLion");
    });
    rulesButton.on("pointerup", () => {
      this.scene.start('rules', this.musicMenu);
    });
    creditsButton.on("pointerup", () => {
      this.scene.start('credits', this.musicMenu);
    });


  }
  update() {
    console.log("update");
  }
}

function pointerUp(boton, escena) {
  boton.on("pointerup", () => {
    this.scene.start(escena);
  });
}