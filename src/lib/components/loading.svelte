<script>
	import { onMount } from 'svelte';
	let p = 0;
	let visible = false;
	onMount(() => {
		function next() {
			visible = true;
			p += 0.1;
			const remaining = 1 - p;
			if (remaining > 0.15) setTimeout(next, 500 / remaining);
		}
		setTimeout(next, 250);
	});
</script>

{#if visible}
<div class="progress-container">
	<div class="progress" style="inline-size: {p * 100}%" />
</div>
{/if}
