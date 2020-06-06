
export default class Credits extends Phaser.Scene {
    constructor() {
        super({ key: 'credits' });
    }
    init(music) {
        this.musicMenu = music;

    }


    preload() {

    }

    create() {
        this.add.image(0, 0, "credits_fondo").setOrigin(0).setDepth(0);
        //botones
        let backButton = this.add.image(50, 60, "back_button").setDepth(1);
        backButton.setScale(2.5);
        backButton.setInteractive();
        this.musicMenu.resume();
        backButton.on("pointerup", () => {
            this.scene.start('mainMenu', this.musicMenu);
        });

    }
    update() {
        console.log("menu");
    }
}