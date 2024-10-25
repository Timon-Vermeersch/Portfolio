import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess({
    typescript: true // Ensure TypeScript support is enabled
  }),
  kit: {
    adapter: adapter(),
  },
};

export default config;