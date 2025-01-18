# astro-transition-event-polyfill

An integration that adds a polyfill for the astro:page-load event when view transitions are not used.

## Installation

### Automatic

To get started, simply install the integration via Astro:

```bash
# npm
npx astro add astro-transition-event-polyfill

# pnpm
pnpm astro add astro-transition-event-polyfill

# yarn
yarn astro add astro-transition-event-polyfill
```

### Manual

First, install the integration from npm:
```bash
# npm
npm i astro-transition-event-polyfill

# pnpm
pnpm add astro-transition-event-polyfill

# yarn
yarn add astro-transition-event-polyfill
```

Afterwards, update your `astro.config.mjs` to use the integration:

```ts
import { defineConfig } from 'astro/config';
import eventPolyfill from 'astro-transition-event-polyfill';

// https://astro.build/config
export default defineConfig({
  integrations: [eventPolyfill()]
});
```

## Usage

Once the integration is installed and specified in your Astro config, the `astro:page-load` event will be fired on all pages that don't have view transitions enabled.