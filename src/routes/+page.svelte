<script>
    import {navbarHeight} from '../stores/varStore.js'
    import AboutCards from '$lib/aboutCards.svelte';
    
    $: document.documentElement.style.setProperty(
        '--navbar-adjusted-height',
        `calc(100dvh - 152px)`
    );
</script>




<div class = 'flex flex-col flex-wrap  align-middle justify-center h-[calc(100dvh_-_124px)]'>
     {$navbarHeight}
    <span class='text-8xl flex flex-wrap text-center '>Hi I'm <span class= 'font-bold'>Timon Vermeersch!</span></span>
    <span class='text-2xl flex flex-wrap text-center' >self-employed Software engineer</span>
</div>


<div class='bg-red-100 flex flex-col  p-4 '>

    <div class='flex flex-1 flex-wrap justify-evenly m-4'>
         <AboutCards  image="/xd.jpg" class=' flex-1 flex items-center justify-center p-2 m-4 rounded' bg={''} title={'About Me'} body="I build solutions that cut to the chase. Every project I take on is an exercise in practicality and precision, created with an intentional blend of efficiency and user focus. I don’t settle for what just “works”—I aim for what works best, with an approach that’s as adaptive as it is purposeful. My projects are functional to their core, designed to make the complex feel simple and to empower users without any unnecessary clutter.
            "/> 

        <AboutCards image="/omo.webp" class=' flex-1 flex items-center justify-center p-2 m-4 rounded' title="Mission" body="To design software that’s smart, streamlined, and purpose-built. I believe that great tools don’t just solve problems—they solve them seamlessly, giving users exactly what they need. My mission? To create applications that are lean, adaptable, and built to meet real-world demands without distraction."/> 

    </div>

    
    <div class='flex flex-1 flex-wrap justify-evenly m-4'>
        <AboutCards image="/os.png" class='bg-purple-300 flex-1 flex items-center justify-center p-2 m-4 rounded' title="Core Values" 
            body="<ul>
                <li>Purpose-Driven Precision: I keep things simple and focused, with every choice serving a clear function.B</li>
                <li>Curiosity in Practice: Exploring new approaches is part of my process, but always with a purpose—it’s about uncovering what works best.</li>
                <li>Adaptability Without Compromise: I’m quick to learn and quicker to apply, choosing tools and methods that enhance both the product and the process.</li>
            </ul>"/>

         <AboutCards image="/nier.jpeg" class='bg-purple-300 flex-1 flex items-center justify-center p-2 m-4 rounded' title= "Philosophy" body= "I believe software should work with purpose, leaving out anything that doesn’t add value. I build with clarity and impact, always balancing what’s effective with what’s efficient. My aim is simple: create applications that empower users by delivering exactly what’s needed, nothing more and nothing less."/> 
    </div>

</div>

