/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				fondo:{
					100:"rgba(192, 192, 192, 0.2);",
				},
				"violeta-op":{
					100:"rgba(148, 87, 235, 0.2)",
					200:"rgba(148, 87, 235, 0.9)",
					300:"rgba(100, 40, 205, 0.5)",},
				  "azul-op":{
					100:"rgba(66, 133, 244, 0.2)",
					200:"rgba(66, 133, 244, 0.9)",
					300:"rgba(50, 40, 205, 0.5)"},
				  "verde-op":{
					100:" rgba(0, 255, 0, 0.1)",
					200:" rgba(0, 255, 0, 0.9)",
					300:"rgba(0, 77, 0, 0.5)"},
				  "gris-op":{
					100:"rgba(200, 200, 200, 0.2)",
					200:"rgba(200, 200, 200, 0.9)",
					300:"rgba(80, 80, 80, 0.5)"},
				  "rojo-op":{
					100:"rgba(200, 0, 0, 0.2)",
					200:"rgba(200, 0, 0, 0.9)",
				  },
				  "naranja-op":{
					100:"rgba(255, 165, 0, 0.2)",
					200:"rgba(255, 165, 0, 0.9)"
				  },
				  ig:"#E4405F"
			}
		},
	},
	plugins: [],
}
