import React from 'react';

const Cart = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='stroke-current text-black-700 icon icon-tabler icon-tabler-shopping-cart'
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
			<circle cx='9' cy='19' r='2' />
			<circle cx='17' cy='19' r='2' />
			<path d='M3 3h2l2 12a3 3 0 0 0 3 2h7a3 3 0 0 0 3 -2l1 -7h-15.2' />
		</svg>
	);
};

export default Cart;
