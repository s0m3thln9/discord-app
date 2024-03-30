// noinspection JSUnusedGlobalSymbols

/** @type {import('tailwindcss').Config} */
export default {
	mode: 'jit',
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '485px',
			md: '640px',
			lg: '830px',
			xl: '1100px',
			'2xl': '1300px',
			'3xl': '1500px',
			'4xl': '1700px',
			'5xl': '1900px',
			'6xl': '2100px',
		},
		extend: {
			boxShadow: {
				select: '0 0 1rem 0.25rem rgba(0, 0, 0, 0.2)',
				div: '0 0.125rem 0.625rem 0 rgba(0, 0, 0, 0.2)',
			},
			backgroundImage: {
				'auth-and-reg-background': "url('/src/assets/img/auth-and-reg-background.jpg')",
				'checkbox-background': "url('/src/assets/img/checkbox.svg')",
			},
		},
		colors: {
			sidebar: '#2b2c31',
			hover: '#35373c',
			'user-info': '#232428',
			content: '#313338',
			'profile-bg': '#1e1f22',
			white: '#f2f3f5',
			navigation: '#1e1f22',
			choosed: '#404249',
		},
		fontFamily: {
			code: "Consolas, 'Andale Mono WT', 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', Monaco, 'Courier New', Courier, monospace",
		},
	},
	plugins: [],
}
