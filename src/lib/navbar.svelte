<script>
    import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';
</script>

<Navbar  class="bg-blue-200 p-2 pb-4 sm:p-0.1">
	<NavBrand href="/">
	  <img src="logo.svg" class="me-3 h-6 sm:h-9" alt="Flowbite Logo" />
	  <span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Timon Vermeersch</span>
	</NavBrand>
	<NavHamburger  />
	<NavUl slideParams={{ delay: 0, duration: 200, }} >
	  <NavLi href="/">Home</NavLi>
	  <NavLi href="/about">About</NavLi>
	  <!-- <NavLi href="/docs/components/navbar">Navbar</NavLi> -->
	  <!-- <NavLi href="/pricing">Pricing</NavLi> -->
	  <NavLi href="/contact">Contact</NavLi>
	</NavUl>
</Navbar>