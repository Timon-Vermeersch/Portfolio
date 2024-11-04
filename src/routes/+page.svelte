<script>
    import { onMount } from 'svelte';
    import HomeCards from '$lib/homeCards.svelte';
    import Projects from '../lib/projects.svelte';
    import BArrow from '$lib/bArrow.svelte';
    import { sectionRefs } from '../stores/varStore.js';

    let homeCardsRef;
    let projectsRef;
    let contactRef;
    
    let homeCardsVisible = false;
    let projectsVisible = false;

    onMount(() => {
        sectionRefs.update(refs => ({
            ...refs,
            about: homeCardsRef,
            projects: projectsRef,
            contact: contactRef,
        }));
        console.log("HomeCardsRef:", homeCardsRef);
        console.log("ProjectsRef:", projectsRef);
        console.log("ContactRef:", contactRef);
        window.addEventListener("scroll", handleScroll);
        handleScroll(); 
        return () => window.removeEventListener("scroll", handleScroll);
    });

    export const scrollComponent = (componentRef) => {
        componentRef?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight && rect.bottom > 0;
    };
 
    const handleScroll = () => {
        if (homeCardsRef && isInViewport(homeCardsRef)) homeCardsVisible = true;
        if (projectsRef && isInViewport(projectsRef)) projectsVisible = true;
    };

</script>

<style>
    .fade-in {
        opacity: 0;
        transform: translateY(20px); 
        transition: opacity 1.5s ease, transform 1.5s ease; 
    }
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0); 
    }
</style>


<div class="flex flex-col items-center justify-center h-[calc(100dvh_-_124px)] w-full text-center">
    <span class="text-5xl sm:text-6xl md:text-8xl">Hi I'm <span class="font-bold">Timon Vermeersch!</span></span>
    <span class="text-lg sm:text-2xl max-w-full">Self-employed Software engineer</span>
    <BArrow class="flex flex-end" />
</div>

<div bind:this={homeCardsRef} class="fade-in" class:visible={homeCardsVisible}>
    <HomeCards />
</div>

<div bind:this={projectsRef} class="fade-in" class:visible={projectsVisible}>
    <Projects />
</div>

<div bind:this={contactRef}></div>
