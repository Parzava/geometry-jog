export class GameScene extends Phaser.Scene {
	constructor() {
		super({ key: "game" });
	}

	preload() {
		// this will get called by phaser
		// automatically when the scene loads
	}

	create() {
		// set background color
		this.cameras.main.setBackgroundColor(0x87ceeb);
	}
}
