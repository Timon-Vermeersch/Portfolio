<script>
	import '../app.css';
	let { children } = $props();
	import Container from '../lib/container.svelte'
	import BreadCrumb from '../lib/breadCrumb.svelte';
</script>

<div class = 'min-h-dvh  bg-customColors-5'>
	<Container >
	{@render children()}
	</Container>
</div>
