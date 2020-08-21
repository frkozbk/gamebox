import React from 'react';
import CodBo4 from 'assets/codbo4.jpg';

const ProductCard = () => {
	return (
		<div className='w-full min-h-72 max-w-sm mx-auto bg-white border-2 border-gray-200 p-2 rounded-lg hover:shadow-xl hover:scale-150 duration-300'>
			<div className='w-full h-64 rounded-lg bg-red-400 mb-3'>
				<img src={CodBo4} className='w-full h-full rounded-lg' alt='Call of Duty: Black Ops 4' />
			</div>
			<div className=' p-5 pt-1'>
				<p className='text-gray-600 text-sm'>Games - Action</p>
				<p className=' text-gray-800 font-bold mb-5'>Call of Duty: Black ops 4</p>
				<p className='font-bold text-2xl mb-3' style={{ color: '#ff9078' }}>
					$19.99
				</p>
				<button className='w-full py-3 rounded-full bg-yellow-500 text-white'>Add To Cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
