export const TOGGLE_MUSIC = "TOGGLE_MUSIC"

export const STILL = "STILL"
export const PAN_AROUND = "PAN_AROUND"

export const IDLE = "IDLE"
export const SPREAD = "SPREAD"
export const RAIN = "RAIN"
export const FLAT = "FLAT"
export const WAVE = "WAVE"

export type Action =
	{ type: typeof TOGGLE_MUSIC } |
	{ type: typeof IDLE } |
	{ type: typeof SPREAD } |
	{ type: typeof RAIN } |
	{ type: typeof FLAT } |
	{ type: typeof WAVE } |
	{ type: typeof STILL } |
	{ type: typeof PAN_AROUND } 