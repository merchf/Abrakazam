
export default class Rules extends Phaser.Scene {
    constructor() {
        super({ key: 'rules' });
    }
    preload() {

    }

    create() {
        this.add.image(0, 0, "rules_fondo").setOrigin(0).setDepth(0);
        //botones
        let backButton = this.add.image(50,60, "back_button").setDepth(1);
        backButton.setScale(2.5);
        backButton.setInteractive();
        backButton.on("pointerup", () => {
            this.scene.start('mainMenu');
        });

    }
    update() {
        console.log("menu");
    }
}