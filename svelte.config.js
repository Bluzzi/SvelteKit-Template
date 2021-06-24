import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import node from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		defaults: {
			style: "scss",
			script: "ts"
		},
		scss: {
			outputStyle: "compressed",
			prependData: "@import './src/lib/scss/variables.scss';"
		},
		postcss: {
			plugins: [autoprefixer]
		}
	}),
	kit: {
		target: "#svelte",
		adapter: node()
	}
};

export default config;
