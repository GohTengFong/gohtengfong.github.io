import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Markdown:
import { mdsvex } from 'mdsvex';
import { mdsvexOptions } from './mdsvex.options.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  
  kit: {
    // ✅ CORRECT CONFIG FOR GITHUB PAGES
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: '404.html',
      precompress: false,
      strict: true
    }),
    
    alias: {
      '@': './src/*'
    },
    
    prerender: {
      handleMissingId: 'warn',
      handleHttpError: 'warn',
      crawl: true,
      entries: ['*']
    },
    
    inlineStyleThreshold: 5000
  }
};

export default config;