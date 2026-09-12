import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
    plugins: [
        react(),
        ViteImageOptimizer({
            jpg: { quality: 75 },
            jpeg: { quality: 75 },
            png: { quality: 75 },
        }),
    ],
    build: {
        target: 'es2020',
        cssCodeSplit: true,
        sourcemap: false,
        minify: 'oxc',
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (!id.includes('node_modules')) return;

                    if (id.includes('styled-components')) return 'styled';
                    if (id.includes('framer-motion')) return 'motion';
                    if (id.includes('lenis')) return 'lenis';
                    if (
                        id.includes('react-router') ||
                        id.includes('react-dom') ||
                        id.includes('/react/')
                    ) {
                        return 'react';
                    }
                },
            },
        },
    },
});