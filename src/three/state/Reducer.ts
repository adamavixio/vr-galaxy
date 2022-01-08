import { FLAT, IDLE, PAN_AROUND, RAIN, SPREAD, STILL, TOGGLE_MUSIC, WAVE, type Action } from "./Action"
import { newState } from "./State"

const state = newState()
export type State = typeof state

export const dispatch = (action: Action) => {
	return reducer(action)
}

const reducer = (action: Action) => {
	switch (action.type) {
		case TOGGLE_MUSIC:
			state.audio.isPlaying ?
				state.audio.pause() :
				state.audio.play()
			return state

		case RAIN:
			state.objectAnimation = SPREAD
			state.galaxy.spread()
			state.galaxy.rain()
			state.objectAnimation = IDLE
			return state
		case FLAT:
			state.objectAnimation = FLAT
			state.galaxy.plane()
			state.objectAnimation = IDLE
			return state
		case WAVE:
			state.objectAnimation = WAVE
			state.galaxy.plane()
			state.galaxy.wave()
			state.objectAnimation = IDLE
			return state

		case STILL:
			state.cameraAnimation = STILL
			return state
		case PAN_AROUND:
			state.cameraAnimation = PAN_AROUND
			return state

		default:
			throw new Error(`Unknown Action ${action.type}`)
	}
}
