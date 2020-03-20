export default class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'boot' });
  }
  create() {
    this.scene.start('preloader');
  }
  update() {
    console.log("preloader");
  }
}