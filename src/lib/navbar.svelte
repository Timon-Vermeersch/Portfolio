<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
	import { onMount } from 'svelte';
	import {navbarHeight} from '../stores/varStore.js'
	
// 	onMount(() => {
// 		const navbarElement = document.querySelector('.navbar')
// 		if(navbarElement){
// 			navbarHeight.set(navbarElement.clientHeight);
// 		}
//   });
</script>

<Navbar class="navbar bg-customColors-5 p-2 pb-4 sm:p-0.1">
	<NavBrand href="/">
	  <img src="logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
	  <!-- <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Timon Vermeersch</span> -->
	</NavBrand>
	<NavHamburger  />
	<NavUl slideParams={{ delay: 0, duration: 200, }} >
	  <NavLi href="/">scrollToAbout</NavLi>
	  <NavLi href="/">scrollToProjects</NavLi>
	  <NavLi href="/about">ScrollToContact</NavLi>
	  <!-- <NavLi href="/docs/components/navbar">Navbar</NavLi> -->
	  <!-- <NavLi href="/pricing">Pricing</NavLi> -->
	  <!-- <NavLi href="/contact">Contact</NavLi> -->
	</NavUl>
</Navbar>



