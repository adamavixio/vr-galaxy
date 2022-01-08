import { WebGLRenderer } from "three";

export const newRenderer = () => {
	const renderer = new WebGLRenderer()
	renderer.setSize(window.innerWidth, window.innerHeight)

	return {
		raw: renderer,
	}
}
