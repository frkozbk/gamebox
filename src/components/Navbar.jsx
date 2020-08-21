import React from 'react';
import GameIcon from 'components/Icons/GameIcon';
import Cart from 'components/Icons/Cart';
import Heart from 'components/Icons/Heart';
import HamburgerMenu from 'components/Icons/HamburgerMenu';
import Sidebar from 'components/common/Sidebar';

const Navbar = () => {
	const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
	const toggleSidebar = () => {
		setIsSidebarOpen((oldValue) => {
			return !oldValue;
		});
	};
	return (
		<nav className='overflow-hidden w-screen lg:px-20 h-24 px-5 border-b border-gray-200 shadow-md '>
			<div className='container mx-auto h-full flex justify-between items-center'>
				<div className='w-auto flex items-center justify-between'>
					<GameIcon />
					<p className='text-2xl font-bold text-purple-600'>GameBox</p>
				</div>
				<div className='w-1/3 container hidden xl:block relative'>
					<input
						type='text'
						name='searchGameInput'
						placeholder='Search'
						className=' w-full h-12 focus:outline-none border-gray-500 border-2 rounded-full pl-5 focus:border-purple-800 focus:shadow-outline focus:shadow-primary-100-sm'
					/>
				</div>
				<div className='md:hidden h-12 flex justify-center items-center'>
					<button onClick={() => toggleSidebar()}>
						<HamburgerMenu />
						<p className='sr-only'>Sidebar button</p>
					</button>
				</div>
				<div className='md:flex justify-center items-center hidden'>
					<button className='rounded-full focus:outline-none focus:shadow-outline border-2 border-gray-300 text-gray-800 px-6 py-2'>
						Sign Up
					</button>
					<button className='border-none ml-6 text-gray-800'>Login</button>
					<button className='ml-4 focus:outline-none focus:shadow-outline'>
						<Cart />
						<p className='sr-only'>Cart</p>
					</button>
					<button className='ml-4 focus:outline-none focus:shadow-outline'>
						<Heart />
						<p className='sr-only'>favorite products</p>
					</button>
				</div>
				{isSidebarOpen && <Sidebar toggleSidebarFn={toggleSidebar} />}
			</div>
		</nav>
	);
};

export default Navbar;
