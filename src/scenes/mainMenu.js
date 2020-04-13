export default class MainMenu extends Phaser.Scene {
  constructor() {
    super({ key: 'mainMenu' });
  }
  preload() {

    this.load.tilemapTiledJSON('mapaLevel1', '/assets/mapas/mapaNivel1.json');

    this.load.image("rules_fondo", '/assets/menu/rules.png');
    this.load.image("credits_fondo", '/assets/menu/credits.png');
    this.load.image("back_button", '/assets/menu/back_button.png');
    this.load.image("TrainBack", '/assets/background/TrainBack.png');
    this.load.image("TrainFulll", '/assets/background/TrainFulll.png');
    this.load.image("trees", '/assets/background/trees.png');
    this.load.image("1trees", '/assets/background/1trees.png');
    this.load.image("luna", '/assets/background/luna.png');
    this.load.image("Stalin_without_bg", '/assets/background/Stalin_without_bg.png');

  }

  create() {
    // this.add.image(this.game.renderer.width / 1.81, this.game.renderer.height * 0.21, "logo").setDepth(1);
    this.add.image(0, 0, "menu_fondo").setOrigin(0).setDepth(0);

    /*
        this.anims.create({
          key:"walkDcha",
          frameRate: 4,
          repeat: -1,
          frames:this.anims.generateFrameNumbers("brujaDcha", {
            frames: [0,1,2,3]
          })
        })
    */
    //botones
    let playButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play_button").setDepth(1);
    let rulesButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 80, "rules_button").setDepth(1);
    let creditsButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2 + 160, "credits_button").setDepth(1);

    //hover botones
    let hoverSprite = this.add.sprite(100, 100, "bruja");
    hoverSprite.setScale(0.5);
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
      this.scene.start('level1');
    });
    rulesButton.on("pointerup", () => {
      this.scene.start('rules');
    });
    creditsButton.on("pointerup", () => {
      this.scene.start('credits');
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