import { Color, Scene as ThreeScene } from "three";

export const newScene = () => {
	const scene = new ThreeScene()
	scene.background = new Color(0x000000)

	return {
		raw: scene,
	}
}
