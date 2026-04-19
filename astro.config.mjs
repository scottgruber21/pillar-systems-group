// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Replace this with your actual live domain
  site: 'https://www.pillarsystemsgroup.com', 
  
  integrations: [
    sitemap()
  ],
  
  vite: {
    plugins: [tailwindcss()]
  }
});