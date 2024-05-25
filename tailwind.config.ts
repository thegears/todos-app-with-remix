import type { Config } from 'tailwindcss'

export default {
	content: ['./app/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			display: ["group-hover"],
		},
	},
	plugins: [require('daisyui')],
} satisfies Config
