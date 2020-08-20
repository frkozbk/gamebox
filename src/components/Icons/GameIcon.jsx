import React from 'react';

const GameIcon = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='stroke-current text-purple-800'
			viewBox='0 0 64 64'
			strokeWidth='2.5'
			stroke='#CACBD2'
			fill='none'
			style={{ width: '48px', height: '48px' }}
		>
			<path d='M54.2 42.29L50 28.61l-.09-4.88c0-2.1-2.42-4.89-4.91-5.13a11.64 11.64 0 00-7.69 2 7.43 7.43 0 01-3.84 1.15h-5.21a7.37 7.37 0 01-3.84-1.15 11.64 11.64 0 00-7.69-2c-2.5.24-4.91 3-4.91 5.13l-.1 4.88-4.18 13.68a4.14 4.14 0 002.36 5.46c2.72 1.19 5.61-.23 7.29-1.91l2.51-2.33c1.93-1.41 4.26-1 6.65-1h9c2.4 0 4.73-.45 6.66 1l2.5 2.33c1.68 1.68 4.21 3.53 7.3 1.91 2.12-1.1 3.37-3.31 2.39-5.46z'></path>
			<rect x='42.84' y='29.29' width='3.85' height='3.85' rx='1.81' transform='rotate(90 44.76 31.21)'></rect>
			<rect x='33.2' y='29.29' width='3.85' height='3.85' rx='1.81' transform='rotate(90 35.12 31.21)'></rect>
			<rect x='38.02' y='34.11' width='3.85' height='3.85' rx='1.81' transform='rotate(180 39.94 36.035)'></rect>
			<rect x='38.02' y='24.47' width='3.85' height='3.85' rx='1.81' transform='rotate(-180 39.94 26.39)'></rect>
			<circle cx='20.54' cy='31.21' r='3.97'></circle>
			<path d='M30.87 21.73s-.22-11.32 9.82-13.46'></path>
		</svg>
	);
};

export default GameIcon;
