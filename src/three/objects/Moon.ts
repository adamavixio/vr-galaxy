import { IcosahedronGeometry, Mesh, MeshStandardMaterial } from "three";
import type { Position } from "../Types";

export const newMoon = () => {
	const ballGeometry = new IcosahedronGeometry(1, 3);
	const ballMesh = new MeshStandardMaterial({ color: 0x414950 });
	const ball = new Mesh(ballGeometry, ballMesh);

	const ballWireframeGeometry = new IcosahedronGeometry(1.02, 3);
	const ballWireframeMesh = new MeshStandardMaterial({ color: 0xffffff, wireframe: true });
	const wireframe = new Mesh(ballWireframeGeometry, ballWireframeMesh);

	const rotate = ({ x, y, z }: Position) => {
		x && (ball.rotation.x += x, wireframe.rotation.x += x)
		y && (ball.rotation.y += y, wireframe.rotation.y += y)
		z && (ball.rotation.z += z, wireframe.rotation.z += z)
	}

	return {
		raw: { ball, wireframe },

		slowRoll() {
			rotate({ x: 0.01, y: 0.01 })
		},
	}
}