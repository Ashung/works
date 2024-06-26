// import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        paths: {
            relative: false,
			base: '/works'
		}
        // process.argv.includes('dev') ? '' : 
        // trailingSlash: 'always',
        // prerender: {
        //     default: true,
        // }
    },
    preprocess: [
        preprocess({
            postcss: true
        })
    ]
};

export default config;
