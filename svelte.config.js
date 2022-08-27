// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            fallback: '200.html',
        }),
        trailingSlash: 'always',
        outDir: 'dist'
    },
    preprocess: [
        preprocess({
            postcss: true
        })
    ]
};

export default config;
