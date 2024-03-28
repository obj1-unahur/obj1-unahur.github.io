import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import icon from 'astro-icon';
import { PATH } from './paths';


// https://astro.build/config
export default defineConfig({
  site: 'https://obj1-unahur.github.io',
  base: '/objetos-web',
  compressHTML: false,
  integrations: [mdx(), icon(), tailwind({
    applyBaseStyles: false
  }), compress()]
});