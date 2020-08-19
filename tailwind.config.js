module.exports = {
	purge: [],
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
		},
	},
	variants: {
		scale: ['responsive', 'hover', 'focus', 'group-hover'],
	},
	plugins: [],
};
