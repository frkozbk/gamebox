import React from 'react';

const Close = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='icon icon-tabler icon-tabler-x'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			strokeWidth='1.5'
			stroke='#9E9E9E'
			fill='none'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path stroke='none' d='M0 0h24v24H0z' />
			<line x1='18' y1='6' x2='6' y2='18' />
			<line x1='6' y1='6' x2='18' y2='18' />
		</svg>
	);
};

export default Close;
