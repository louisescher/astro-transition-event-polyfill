import type { AstroIntegration } from "astro";
import { createResolver } from "./utils/create-resolver.js";
import { viteVirtualModulePluginBuilder } from "./utils/virtual-module-plugin-builder.js";

export default function integration(): AstroIntegration {
  const { resolve } = createResolver(import.meta.url);

  const polyfill = viteVirtualModulePluginBuilder(
    'ate:polyfill',
    'astro-transition-event-polyfill',
    `import '${resolve('./polyfill.js')}';`
  )

  return {
    name: 'astro-transition-event-polyfill',
    hooks: {
      'astro:config:setup': ({ injectScript, updateConfig }) => {
        updateConfig({
          vite: {
            plugins: [polyfill()]
          }
        });
        
        injectScript('page', `import 'ate:polyfill'`);
      }
    }
  }
}