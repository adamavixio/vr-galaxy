import { PerspectiveCamera, type Renderer } from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export const newCamera = () => {
	const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, .01, 1000)
	camera.position.z = 10
	camera.aspect = window.innerWidth / window.innerHeight
	camera.updateProjectionMatrix()

	return {
		raw: camera,

		theta: 0,
		orbitControls: {} as OrbitControls,

		addControls({ domElement }: Renderer) {
			this.orbitControls = new OrbitControls(camera, domElement)
		},

		pan() {
			this.theta += 0.01
			camera.position.x = 10 * Math.sin(this.theta)
			camera.position.z = 10 * Math.cos(this.theta)
		},
	}
}
