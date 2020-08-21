import React from 'react';
import CategoryCard from 'components/LandingPage/CategoryCard';

const LandingPage = () => {
	return (
		<main className='w-screen min-h-almost-screen bg-gray-100 pt-8 px-3 pb-8'>
			<div className='container mx-auto'>
				<div className='mx-auto flex flex-col xl:flex-row mb-5'>
					<div
						className='w-full pl-8 md:pl-16 xl:min-h-144 bg-blue-700 mb-5 xl:w-7/12 xl:mb-0 xl:mr-5 rounded-lg py-32'
						style={{ backgroundColor: '#0081f1' }}
					>
						<p className='text-blue-100 text-md' style={{ color: '#90dfff' }}>
							over 2,0000 games
						</p>
						<p className='text-4xl xl:text-6xl text-white'>Best Deals</p>
						<p className='text-4xl xl:text-6xl text-white mb-12 leading-10'>on GameBox</p>
						<button className='border-white border-2 text-white py-2  px-10 rounded-full hover:scale-110'>
							View Our Offers
						</button>
					</div>
					<div className='w-full h-full flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-2 gap-3'>
						<CategoryCard />
						<CategoryCard />
						<CategoryCard />
						<CategoryCard />
					</div>
				</div>
				<h4 className='text-blue-900 text-3xl tracking-wide font-bold'>Our Products</h4>
				<div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3'>
					<div className='w-full h-72 max-w-sm bg-white border-gray-100 border-2 p-2 rounded-lg'>
						<div className='w-full h-64 rounded-lg bg-red-400'></div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default LandingPage;
