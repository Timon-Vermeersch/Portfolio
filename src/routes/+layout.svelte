<script>
	import '../app.css';
	let { children } = $props();
	import Container from '../lib/container.svelte'
	import BreadCrumb from '../lib/breadCrumb.svelte';
</script>

<div class = 'h-svh bg-red-100'>
	<Container >
	<BreadCrumb class = 'pt-0'>
	</BreadCrumb>

	{@render children()}
	</Container>
</div>
