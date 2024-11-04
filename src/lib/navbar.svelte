<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import {navbarHeight} from '../stores/varStore.js'
	import {sectionRefs} from '.././stores/varStore.js'
	
	function scrollComponent(componentRef) {
		console.log("Scrolling to:", componentRef); // Log the ref before scrolling
        componentRef?.scrollIntoView({ behavior: "smooth", block: "start" });
    }

</script>

<Navbar class="navbar bg-customColors-6 p-1 sm:p-1">
    <NavBrand href="/">
        <img src="logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
    </NavBrand>
    <NavHamburger />
    <NavUl slideParams={{ delay: 0, duration: 200 }}>
        <NavLi href="/">Home</NavLi>
        <NavLi on:click={() => {
            sectionRefs.subscribe(refs => scrollComponent(refs.about));
        }}>About</NavLi>
        <NavLi on:click={() => {
            sectionRefs.subscribe(refs => scrollComponent(refs.projects));
        }}>Projects</NavLi>
        <NavLi on:click={() => {
            sectionRefs.subscribe(refs => scrollComponent(refs.contact));
        }}>Contact</NavLi>
    </NavUl>
</Navbar>
