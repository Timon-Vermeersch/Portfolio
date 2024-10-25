<script lang='ts'>
	import type { Snippet } from "svelte";
    import Navbar from "../lib/navbar.svelte";
let { children }:{children:Snippet} = $props();

</script>


<Navbar/>
<div class='p-6 max-w-6xl mx-auto bg-green-200'>  
    {@render children?.()}
</div>

