export default class Prologo extends Phaser.Scene {
    constructor() {
        super({ key: 'prologo' });
    }
    create() {
        this.add.image(0, 0, "prologo").setOrigin(0).setDepth(0);
        let backButton = this.add.image(750,125, "next_button").setDepth(1);
        backButton.setScale(0.5);
        backButton.setInteractive();
        backButton.on("pointerup", () => {
           // this.scene.start('level1');
            this.scene.start('batallaFinal');
        });

    }
    update() {
        console.log("preloader");
    }
}