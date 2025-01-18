// @ts-check
import { defineConfig } from 'astro/config';
import eventPolyfill from 'astro-transition-event-polyfill';

// https://astro.build/config
export default defineConfig({
  integrations: [eventPolyfill()]
});
