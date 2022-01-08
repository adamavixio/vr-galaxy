import { MathUtils, Mesh, MeshStandardMaterial, SphereGeometry } from "three";
import type { Position } from "../Types";

export const newGalaxy = (count: number) => {
	const stars: Mesh<SphereGeometry, MeshStandardMaterial>[] = []

	for (let i = 0; i < count; i++) {
		const starGeometry = new SphereGeometry(.05);
		const starMesh = new MeshStandardMaterial({ color: 0xffffff });
		const star = new Mesh(starGeometry, starMesh);
		stars.push(star)
	}

	const setPosition = (i: number, { x, y, z }: Position) => {
		if (x !== undefined) stars[i].position.x = x
		if (y !== undefined) stars[i].position.y = y
		if (z !== undefined) stars[i].position.z = z
	}

	const iterateLinear = (cb: (i: number) => void) => {
		for (let i = 0; i < count; i++) {
			cb(i)
		}
	}

	const iteratePlane = (cb: (i: number, x: number, y: number) => void) => {
		let i = 0;
		for (let x = -35; x < 35; x++) {
			for (let y = -35; y < 35; y++) {
				cb(i, x, y)
				i += 1
			}
		}
	}

	return {
		raw: { stars },

		spread() {
			iterateLinear((i: number) => {
				const [x, y, z] = Array(3).fill(0).map(() => MathUtils.randFloatSpread(50))
				setPosition(i, { x, y, z })
			})
		},

		rain() {
			iterateLinear((i: number) => {
				const y = this.raw.stars[i].position.y < -20 ?
					this.raw.stars[i].position.y = 20 :
					this.raw.stars[i].position.y -= 0.01
				setPosition(i, { y })
			})
		},

		plane() {
			iteratePlane((i, x, y) => {
				setPosition(i, { x: x / 10, y: 0, z: y / 10 })
			})
		},

		wave() {
			let [from, to] = [-35, -30]
			while (from < 36) {
				iteratePlane((i, x, y) => {
					setPosition(i, { x: x / 10, y: x >= from && x <= to ? 1 : 0, z: y / 10 })
					from += 1, to += 1
				})
			}
		},
	}
}