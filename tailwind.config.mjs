/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class', darkMode: 'media',
	theme: {
		extend: { backgroundImage: (theme) => ({
			'image-one': "src('./public/images/logoheader.png')",
			'image-two': "src('./public/images/logoheader-dark.png')",  }),},
	},
	plugins: [],
}
