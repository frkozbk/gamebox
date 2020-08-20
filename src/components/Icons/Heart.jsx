import React from 'react';

const Heart = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='stroke-current text-black-700 icon icon-tabler icon-tabler-heart'
			width='44'
			height='44'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='#673AB7'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' />
			<path d='M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7' />
		</svg>
	);
};

export default Heart;
