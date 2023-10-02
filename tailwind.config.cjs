/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
	darkMode: 'class',
	future: {
		hoverOnlyWhenSupported: true,
	  },
	theme: {
		extend: {
			colors: {	
				"box-bg": "rgb(var(--color-box))",
				"box-shadow": "rgb(var(--box-sd))",
				"box-border": "rgb(var(--box-border))",
				"box-nav": "rgb(var(--box-nav))",
				"box-nav-mob:": "rgb(var(--box-nav-mob))",
				primary: "#c5a880",
				"heading-1": "rgb(var(--heading-1))",
				"heading-2": "rgb(var(--heading-2))",
				"heading-3": "rgb(var(--heading-3))",
				"subheading": "rgb(var(--subheading))",
			},
			backgroundImage: {
				'gradient-radial-light': 'radial-gradient( #f5f5f5 10%, #f3f4f6 15% , #f9fafb 60%)',
				'gradient-radial-dark': 'radial-gradient( #1f2937 30%, #111827 35% , #030712 30%)',
				'gradient-light': 'linear-gradient(0.30turn, #f1f5f9, #f9fafb, #6b7280)',
				'gradient-dark': 'linear-gradient(0.30turn, #030712, #1f2937, #111827 )',
			},
			fontFamily: {
				'sans': ['Nunito', 'sans-serif'],
				'serif': ['Old Standard TT', 'serif']
			},
			screens:{
				midsm:"700px",
				midmd:"880px",
			},
			keyframes: {
				fadein: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1}
				}
			},
			animation: {
				fadein: 'fadein 0.5s ease-in',
			}	
		},
	},
	plugins: [],
}