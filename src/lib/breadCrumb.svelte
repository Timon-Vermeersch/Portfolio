<script>
    import { Breadcrumb, BreadcrumbItem } from 'flowbite-svelte';
    import { HomeOutline, ChevronDoubleRightOutline } from 'flowbite-svelte-icons';
  </script>
  
  <Breadcrumb aria-label="Solid background breadcrumb example" class=" py-3 px-5 dark:bg-gray-900">
    <BreadcrumbItem href="/" home>
      <svelte:fragment slot="icon">
        <HomeOutline class="w-4 h-4 me-2" />
      </svelte:fragment>Home
    </BreadcrumbItem>
    <BreadcrumbItem href="/">
      <svelte:fragment slot="icon">
        <ChevronDoubleRightOutline class="w-5 h-5 mx-2 dark:text-white" />
      </svelte:fragment>
      Projects
    </BreadcrumbItem>
    <BreadcrumbItem>
      <svelte:fragment slot="icon">
        <ChevronDoubleRightOutline class="w-5 h-5 mx-2 dark:text-white" />
      </svelte:fragment>
      Flowbite Svelte
    </BreadcrumbItem>
  </Breadcrumb>