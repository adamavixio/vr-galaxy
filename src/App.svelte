<script lang="ts">
	import { onMount } from "svelte";
	import { startAnimation } from "./three";
	import { FLAT, RAIN, TOGGLE_MUSIC, WAVE } from "./three/state/Action";
	import { dispatch, type State } from "./three/state/Reducer";

	let state: State | undefined;

	const buttonText = state?.audio?.isPlaying ? "Pause" : "Play";

	const onClick = () => {
		state = dispatch({ type: TOGGLE_MUSIC });
	};

	const onKeyPress = (e: any) => {
		if (e.key === "1") state = dispatch({ type: RAIN });
		if (e.key === "2") state = dispatch({ type: FLAT });
		if (e.key === "3") state = dispatch({ type: WAVE });
	};

	onMount(() => {
		state = startAnimation();
	});
</script>

<svelte:window on:keydown={onKeyPress} />

<div id="root">
	<div id="controls">
		<div id="container">
			<button on:click={onClick}>{buttonText}</button>
		</div>
	</div>
</div>

<style>
	#root {
		height: 100px;
		width: 100px;
		background-color: aqua;
	}

	#controls {
		display: flex;
		justify-content: center;
		position: fixed;
		bottom: 0;
		width: 100vw;
	}

	#container {
		background-color: grey;
		padding: 1rem;
	}
</style>
