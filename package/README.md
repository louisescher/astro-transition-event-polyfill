# astro-transition-event-polyfill

An integration that adds a polyfill for the astro:page-load event when view transitions are not used.

## Installation

### In Another Integration

In most cases, this integration is useful to authors of integrations or libraries who want to make sure their scripts run on as many different Astro installations as possible. If you are an integration author who wants to use this integration, first install it from npm:

```bash
# npm
npm i astro-transition-event-polyfill

# pnpm
pnpm add astro-transition-event-polyfill

# yarn
yarn add astro-transition-event-polyfill
```

After that, head to your integration entrypoint and add the integration to the user's config with the `updateConfig` function in the `astro:config:setup` hook:

```ts
import type { AstroIntegration } from 'astro';
import transitionEventPolyfill from 'astro-transition-event-polyfill';

export default function integration(): AstroIntegration {
  return {
    name: 'my-cool-integration',
    hooks: {
      'astro:config:setup': ({ updateConfig }) => {
        updateConfig({
          integrations: [transitionEventPolyfill()],
        });
      }
    }
  }
}
```

### In a Normal Astro Project
#### Automatic

To get started, simply install the integration via Astro:

```bash
# npm
npx astro add astro-transition-event-polyfill

# pnpm
pnpm astro add astro-transition-event-polyfill

# yarn
yarn astro add astro-transition-event-polyfill
```

#### Manual

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

## Usage / How it works

As long as the integration is used, the `astro:page-load` event will be fired on all pages that don't have view transitions enabled.
## Pre-configured Build/Dev commands

**Commands**

- **`pnpm dev`** - Runs the playground and starts `esbuild` in development mode.
  - Runs: `pnpm scripts dev 'src/**/*.ts'`
- **`pnpm build`** - Runs `esbuild`.
  - Runs: `pnpm scripts build 'src/**/*.ts'`

## The `scripts/` Folder

Scripts is a CLI project that wraps `esbuild` with a nice console output as well as providing two modes, `build` and `dev`.  Dev mode creates an `esbuild` context and watches for file changes. This creates a scripts command usable if scripts is a workspace dependency.

```log
> pnpm build

> root@ build /home/native/Documents/Repos/astro-transition-event-polyfill
> pnpm --filter astro-transition-event-polyfill build


> astro-transition-event-polyfill@1.0.0 build /home/native/Documents/Repos/astro-transition-event-polyfill/package
> pnpm scripts build 'src/**/*.ts' --bundle

[04:09 AM] Cleaning dist directory... (4 files found)
[04:09 AM] Building... (4 files found)
[04:09 AM] Generating TypeScript declarations...
[04:09 AM] √ Generated TypeScript declarations
[04:09 AM] √ Build Complete
```

#### Commands and how to use them

| Flags |
| ----- |
| `--no-clean-dist`: Do not clean the `dist/` output |
| `--no-bundle`: Do not bundle the output |
| `--cjs`: Output in CJS mode |
| `--browser`: Output for `browser` instead of `node` |

| Command | Usage |
| ------- | ----- |
| `scripts dev` | `pnpm scripts dev '<glob-pattern>' <flags>` |
| `scripts build` | `pnpm scripts build '<glob-pattern>' <flags>` |