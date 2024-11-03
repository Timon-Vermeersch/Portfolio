<script>
    import { ButtonGroup, Button } from 'flowbite-svelte';
    
    let mainImageSrc = "/omo.webp";
    const buttonImages = {
        Omo: "/omo.webp",
        Nier: "/nier.jpeg",
        Persona: "/os.png"
    };

    function updateImage(button) {
        mainImageSrc = buttonImages[button];
    }
</script>




<div  class=' flex flex-col shadow-2xl mt-8 h-full w-full bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
    <span class="m-4">
        <h2 class="text-3xl sm:text-2xl md:text-6xl text-center font-bold ">Projects</h2>
    </span>
    
    <span class="m-4 flex justify-center">    
        <ButtonGroup class="*:!ring-primary-700">
            {#each Object.keys(buttonImages) as button}
                <Button on:click={() => updateImage(button)}>
                    {button}
                </Button>
            {/each}
        </ButtonGroup>
    </span>
    
    
    <div class='flex justify-center m-4'>
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src="{mainImageSrc}" alt="Main Image">
    </div>
</div>



