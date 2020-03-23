
export default class Credits extends Phaser.Scene {
    constructor() {
        super({ key: 'credits' });
    }
    preload() {

    }

    create() {
        this.add.image(0, 0, "credits_fondo").setOrigin(0).setDepth(0);
        //botones
        let backButton = this.add.image(0, 0, "back_button").setDepth(1);

        backButton.setInteractive();
        backButton.on("pointerup", () => {
            this.scene.start('mainMenu');
        });

    }
    update() {
        console.log("menu");
    }
}