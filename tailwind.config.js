import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import flowbitePlugin from 'flowbite/plugin'




/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			animation:{
				bounceArrow: 'bounceArrow 1.5s infinite',
			},
			keyframes:{
				bounceArrow: {
					'0%, 100%' : {transform : 'translateY(0)'},
					'50%': { transform: 'translateY(8px)' },
				},
			},
			colors: {
				primary: {
					50: '#FFF5F2',
					100: '#FFF1EE',
					200: '#FFE4DE',
					300: '#FFD5CC',
					400: '#FFBCAD',
					500: '#FE795D',
					600: '#EF562F',
					700: '#EB4F27',
					800: '#CC4522',
					900: '#A5371B'
				},
				customColors: {
					'1': '#003135',
					'2': '#024950',
					'3': '#964734',
					'4': '#0FA4AF',
					'5': '#AFDDE5'
				}
			}
		}
	},

	plugins: [typography, forms, containerQueries, aspectRatio, flowbitePlugin]
};