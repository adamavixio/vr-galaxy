import { newAudio } from "../controls/Audio"
import { newCamera } from "../controls/Camera"
import { newRenderer } from "../controls/Renderer"
import { newScene } from "../controls/Scene"
import { newSpotlight } from "../lights/Light"
import { newGalaxy } from "../objects/Galaxy"
import { newMoon } from "../objects/Moon"
import { FLAT, IDLE, PAN_AROUND, RAIN, SPREAD, STILL, WAVE } from "./Action"

export type CameraAnimation = typeof STILL | typeof PAN_AROUND
export type ObjectAnimation = typeof IDLE | typeof SPREAD | typeof RAIN | typeof FLAT | typeof WAVE

export const newState = () => {
	const scene = newScene()
	const audio = newAudio()
	const camera = newCamera()
	const renderer = newRenderer()

	const light = newSpotlight()
	const moon = newMoon()
	const galaxy = newGalaxy(4900)

	scene.raw.add(light.raw)
	scene.raw.add(moon.raw.ball)
	scene.raw.add(moon.raw.wireframe)
	galaxy.raw.stars.forEach(star => scene.raw.add(star))
	camera.addControls(renderer.raw)

	galaxy.spread()

	return {
		cameraAnimation: STILL as CameraAnimation,
		objectAnimation: RAIN as ObjectAnimation,

		scene,
		audio,
		camera,
		renderer,

		light,
		moon,
		galaxy
	}
}
