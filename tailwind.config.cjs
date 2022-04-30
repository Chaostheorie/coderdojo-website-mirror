const typography = require('@tailwindcss/typography');
const forms = require('@tailwindcss/forms');

const palettes = {
	blue: {
		theme: '#2d557d',
		'theme-neutral': '#244464',
		'theme-dark': '#002c50',
		secondary: '#a9ac5d',
		'secondary-dark': '#787d31'
	},
	red: {
		theme: '#bf616a',
		'theme-neutral': '#a4424c',
		'theme-dark': '#8b323f',
		secondary: '#60be86',
		'secondary-dark': '#2c8d59'
	}
};

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			// select palette based on env variable 'DOMAIN'
			colors: {
				...(process.env.DOMAIN !== undefined
					? process.env.DOMAIN.includes('red')
						? palettes.red
						: palettes.blue
					: palettes.blue)
			}
		}
	},

	plugins: [forms, typography]
};

module.exports = config;