
export class Player extends Phaser.GameObjects.Rectangle {

    constructor(scene, x, y) {
super(scene, x, y, 32, 32, 0x00ff00);

this.setOrigin(0.5);

this.scene.add.extsting(this);
this.scene.physics.add.extsting(this);

    }

}
