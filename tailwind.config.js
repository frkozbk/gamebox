module.exports = {
	purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.jsx'],
	theme: {
		extend: {
			inset: {
				'1/2': '50%',
			},
			flex: {
				'2-1': '0 50%',
			},
			flexShrink: {
				'1/2': '50%',
			},
			height: {
				'72': '18rem',
				'80': '20rem',
				'88': '22rem',
				'144': '36rem',
			},
			minHeight: {
				'almost-screen': 'calc(100vh - 6rem)',
				'144': '36rem',
			},
			screen: {
				'2xl': '1400px',
			},
			width: {
				72: '18rem',
				80: '20rem',
			},
			animation: {
				fadeInRight: 'fadeInRight 0.5s ease-in-out',
			},
			keyframes: {
				fadeInRight: {
					'0%': { transform: 'translateX(20rem)' },
					'100%': { transform: 'translateX(0)' },
				},
			},
		},
	},
	variants: ['responsive', 'hover', 'focus', 'group-hover'],
	plugins: [],
};
