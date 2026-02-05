<script>
  import { buttonVariants } from '@/ui/button';

  import Github from '@/icons/github.svelte';
  import Linkedin from '@/icons/linkedin.svelte';
  import Mail from '@/icons/mail.svelte';
  import ModeToggle from './mode-toggle.svelte';

  const SocialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/goh-teng-fong/',
      icon: Linkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/GohTengFong',
      icon: Github
    },
    {
      name: 'Mail',
      url: 'mailto:tengfonggoh@gmail.com',
      icon: Mail
    },
  ];
</script>

<nav
  class="container sticky top-0 z-50 mb-1 flex w-full max-w-4xl items-center justify-between bg-neutral-100/80 py-4 backdrop-blur-md dark:bg-neutral-900/80"
>
  <a
    href="/"
    class="text-2xl flex items-center space-x-2 font-medium tracking-tight opacity-80 transition-opacity duration-150 hover:opacity-100"
  >
    <span>Teng Fong</span>
  </a>
  <div class="flex items-center space-x-1">
    {#each SocialLinks as { name, url, icon }}
      {@const SvelteComponent = icon}
      <a
        href={url}
        title={name}
        target="_blank"
        rel="noopener noreferrer"
        class={buttonVariants({
          variant: 'ghost',
          size: 'icon',
          class: 'opacity-80 transition-opacity duration-150 hover:opacity-100'
        })}
      >
        <SvelteComponent height={18} />
      </a>
    {/each}
    <ModeToggle />
  </div>
</nav>
