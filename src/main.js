//@ts-check
import "./css/style.css";
import Phaser from "phaser";
import { GameScene } from "./scenes/game-scene";

/** @type { Phaser.Types.Core.GameConfig } */
const config = {
	width: 600,
	height: 300,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	parent: "app",
	scene: [ GameScene ]
};

const game = new Phaser.Game(config);
