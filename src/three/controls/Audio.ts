import { Audio, AudioListener, AudioLoader } from "three";

export const newAudio = () => {
	const listener = new AudioListener()
	const audio = new Audio(listener)
	const loader = new AudioLoader()

	audio.context.suspend()
	loader.load('./music.mp3', (buffer) => {
		audio.setBuffer(buffer)
		audio.setLoop(true)
		audio.setVolume(1)
	})

	return {
		raw: { audio, listener, loader },

		isPlaying: false,
		duration: 0,

		play() {
			this.isPlaying = true
			audio.context.resume()
			audio.play()
		},

		pause() {
			this.isPlaying = false
			audio.pause()
			audio.context.suspend()
		}
	}
}
