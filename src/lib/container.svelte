<script lang='ts'>
	import type { Snippet } from "svelte";
    import Navbar from "./navbar.svelte";
    let { children }:{children:Snippet} = $props();
    
</script>


<Navbar />
<div class='p-6 max-w-6xl flex flex-col flex-wrap sm: w-full md: w-full mx-auto bg-yellow-100'>  
    {@render children?.()}
</div>

