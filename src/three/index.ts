import { animate } from "./animation/Animation"
import type { State } from "./state/Reducer"
import { newState } from "./state/State"

export const startAnimation = () => {
	const state = newState()

	render(state)
	animate(state)

	return state
}

const render = (state: State) => {
	const root = document.querySelector("#root")
	root.appendChild(state.renderer.raw.domElement)
	window.addEventListener("resize", () => resize(state))
}

const resize = (state: State) => {
	state.renderer.raw.setSize(window.innerWidth, window.innerHeight)
	state.camera.raw.aspect = window.innerWidth / window.innerHeight;
	state.camera.raw.updateProjectionMatrix();
}
