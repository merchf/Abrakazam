

export default class Prologo extends Phaser.Scene {
    constructor() {
        super({ key: 'prologo' });
    }
    create() {
        this.logic = this.scene.get('logicLevels');
        this.music = this.logic.addMusicScenes(this, "prologo");

        this.add.image(0, 0, "prologo").setOrigin(0).setDepth(0);
        let backButton = this.add.image(770, 50, "flecha_button").setDepth(1);
        backButton.setScale(1);
        backButton.setInteractive();
        backButton.on("pointerup", () => {
            this.music.destroy();
            //this.scene.start('gameOver');
            this.scene.start('level1');
            //this.scene.start('prologoBeforeMrLion');
        });

    }
    update() {
        console.log(this.key);
    }
}