import React from 'react';
import BadlandsImage from 'assets/badlands.png';

const CategoryCard = () => {
	return (
		<div className='max-w-full sm:w-64 xl:w-full md:mx-auto h-72 rounded-lg group relative'>
			<div className='w-48 xl:w-50 absolute left-1/2 left  transform -translate-x-1/2 h-48 mx-auto bg-orange-200 z-20 rounded-lg overflow-hidden group-hover:scale-105 duration-300'>
				<img src={BadlandsImage} alt='badlands oyun logosu' className='w-full' />
			</div>
			<div className='w-full max-w-md mx-auto mt-32 h-40 bg-orange-500 z-10 pl-20 rounded-lg flex flex-col'>
				<h5 className='text-2xl text-white mt-auto'>Arcade</h5>
				<p className='text-gray-300 mb-4' style={{ color: '#ffd7cb' }}>
					156 games
				</p>
			</div>
		</div>
	);
};

export default CategoryCard;
