import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import AstroPWA from '@vite-pwa/astro';
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: 'https://tresowesgreencottage.com',
  vite: {
    logLevel: 'info',
    define: {
      __DATE__: `'${new Date().toISOString()}'`
    }
  },
  integrations: [tailwind(), alpinejs(), AstroPWA({
    mode: 'production',
    base: '/',
    scope: '/',
    includeAssets: ['favicon.svg'],
    registerType: 'autoUpdate',
    manifest: {
      name: 'Tresowes Green Cottage',
      short_name: 'Tresowes Green Cottage',
      theme_color: '#ffffff',
      icons: [{
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png'
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png'
      }, {
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any maskable'
      }]
    },
    workbox: {
      navigateFallback: '/404',
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}']
    },
    devOptions: {
      enabled: true,
      navigateFallbackAllowlist: [/^\/404$/]
    }
  }), sitemap()],
  output: "server",
  adapter: cloudflare()
});