import { PAN_AROUND, RAIN } from "../state/Action";
import type { State } from "../state/Reducer";

export const animate = (state: State) => {
	let busy = false

	const runCameraAnimation = () => {
		if (state.cameraAnimation === PAN_AROUND) {
			state.camera.pan()
		}
	}

	const runObjectAnimation = () => {
		if (state.objectAnimation === RAIN) {
			state.galaxy.rain()
		}
	}

	const runDefaultAnimation = () => {
		state.moon.slowRoll()
	}

	const animate = () => {
		requestAnimationFrame(animate);

		runCameraAnimation()
		runObjectAnimation()
		runDefaultAnimation()

		// state.camera.orbitControls.update()
		state.renderer.raw.render(state.scene.raw, state.camera.raw);
	}

	animate()

	const toggleBusy = () => busy = !busy

	return {
		busy,
		toggleBusy,
	}
}
