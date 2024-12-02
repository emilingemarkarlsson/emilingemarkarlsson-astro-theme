import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
    site: 'https://www.emilingemarkarlsson.com', // Update to your site's actual URL
    integrations: [
        mdx(),
        sitemap(),
        tailwind({
            applyBaseStyles: false
        }),
        partytown({
            // Adds dataLayer.push as a forwarding-event.
            config: {
                forward: ['dataLayer.push']
            }
        })
    ],
    vite: {
        build: {
            rollupOptions: {
                output: {
                    manualChunks: undefined
                }
            }
        }
    },
    build: {
        assetsInlineLimit: 0 // Optimize for performance by setting assets inline limit
    }
});

// Add Google Analytics tracking directly in your layout or the BaseLayout component
// Example script to include in your <head> section of the main layout
// To be added in BaseLayout.astro or a similar top-level component
