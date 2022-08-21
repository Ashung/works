import { sveltekit } from '@sveltejs/kit/vite';
import { isoImport } from 'vite-plugin-iso-import';

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [
        sveltekit(),
        isoImport()
    ],
    define: {
        'process.env.VITE_BUILD_TIME': JSON.stringify(new Date().toLocaleString()),
    }
};

export default config;
