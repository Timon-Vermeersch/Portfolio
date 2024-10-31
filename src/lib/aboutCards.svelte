<script>
    import { Card } from 'flowbite-svelte';
    export let title;
    export let body;
    export let image;

  </script>


<Card img={image} >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
    <p class="font-normal text-gray-700 dark:text-gray-400 leading-tight" >{@html body}</p>
 </Card>