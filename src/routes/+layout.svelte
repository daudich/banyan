<!-- +layout.svelte -->
<script lang="ts">
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import '$lib/styles/base/global.scss';
	import { fade } from 'svelte/transition';

	export let data;
</script>

<div
	id="banyan"
>
	<Header />
	
	<div class="layout">
		{#key data.currentRoute}
			<main in:fade={{ duration: 150, delay: 150 }} out:fade={{ duration: 150 }}>
				<slot />
			</main>
		{/key}
	</div>

	<Footer />
</div>