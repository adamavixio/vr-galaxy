import { SpotLight } from "three";

export const newSpotlight = () => {
	const light = new SpotLight(0xffffff)

	light.position.set(0, 20, 0);
	light.castShadow = true;
	light.shadow.mapSize.width = 1024;
	light.shadow.mapSize.height = 1024;
	light.shadow.camera.near = 500;
	light.shadow.camera.far = 4000;
	light.shadow.camera.fov = 30;

	return {
		raw: light,
	}
}
