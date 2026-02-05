import { escapeSvelte } from 'mdsvex';
import { createHighlighter, makeSingletonHighlighter } from 'shiki/bundle/full';

const getHighlighter = makeSingletonHighlighter(createHighlighter);

/** @type {import('mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
  extensions: ['.md'],
  layout: {
    _: './src/components/mdsvex/md-components.svelte'
  },
  rehypePlugins: [],
  highlight: {
    highlighter: async (code, lang = 'text') => {
      const highlighter = await getHighlighter({
        themes: ['github-light', 'github-dark'],
        langs: ['javascript', 'typescript', 'html', 'css', 'bash', 'json', 'markdown']
      });
      
      const html = escapeSvelte(
        highlighter.codeToHtml(code, {
          lang,
          themes: {
            light: 'github-light',
            dark: 'github-dark'
          }
        })
      );
      return `{@html \`${html}\` }`;
    }
  }
};