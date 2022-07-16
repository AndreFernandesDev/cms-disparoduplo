const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],

	theme: {
		extend: {
			dropShadow: {
				bottom: '0 4px 2px -2px rgba(0, 0, 0, 0.25)',
			},
		},
	},

	plugins: [require('flowbite/plugin'), require('daisyui')],
	darkMode: 'class',
};

module.exports = config;
