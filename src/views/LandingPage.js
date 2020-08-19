import React from 'react';
import CategoryCard from '../components/LandingPage/CategoryCard';

const LandingPage = () => {
	return (
		<main className='w-screen min-h-almost-screen bg-gray-100 px-16 py-8'>
			<div className='container-center mx-auto flex flex-col xl:flex-row mb-5'>
				<div
					className='w-full min-h-144 bg-blue-700 mb-5 xl:w-7/12 xl:mb-0 xl:mr-5 rounded-lg pl-16 py-32'
					style={{ backgroundColor: '#0081f1' }}
				>
					<p className='text-blue-100 text-4xl' style={{ color: '#90dfff' }}>
						over 2,0000 games
					</p>
					<p className='text-6xl text-white'>Best Deals</p>
					<p className='text-6xl text-white mb-12 leading-10'>on GameBox</p>
					<button className='border-white border-2 text-white py-2  px-10 rounded-full hover:scale-110'>
						View Our Offers
					</button>
				</div>
				<div className='w-full h-full flex-1 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-2 gap-3'>
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
					<CategoryCard />
				</div>
			</div>
			<h4 className='text-blue-900 text-3xl tracking-wide font-bold'>Our Products</h4>
		</main>
	);
};

export default LandingPage;