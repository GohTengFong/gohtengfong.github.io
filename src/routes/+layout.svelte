<script lang="ts">
  import '@/styles/globals.css';
  import { ModeWatcher } from 'mode-watcher';
  import Header from '@/components/header.svelte';
  import { onMount } from 'svelte';

  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();

  onMount(() => {
    if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
      const scheduleTask = window.requestIdleCallback || ((cb: () => void) => setTimeout(cb, 1));
      scheduleTask(() => {
        import('@vercel/speed-insights/sveltekit').then(({ injectSpeedInsights }) => {
          injectSpeedInsights();
        });
      });
    }
  });
</script>

<ModeWatcher />

<main class="relative flex min-h-screen flex-col py-4 md:py-6">
  <Header />
  <div class="container max-w-4xl flex-1">
    {@render children?.()}
  </div>
</main>
