<script lang='ts'>
    
	import type { Snippet } from "svelte";
    import Navbar from "./navbar.svelte";
    import Footer from "./footer.svelte";
    let { children }:{children:Snippet} = $props();
    
</script>


<Navbar />
<div class='max-w-6xl flex flex-col flex-wrap sm: w-full md:w-full mx-auto '>  
    {@render children?.()}
</div>
<Footer />


