import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useBodyLock from 'hooks/useBodyLock';
import useOnClickOutside from 'hooks/useOutsideClick';
import Close from 'components/Icons/Close';

const Sidebar = ({ toggleSidebarFn }) => {
	const ref = useRef();
	useOnClickOutside(ref, () => toggleSidebarFn());
	useBodyLock();
	return (
		<div className='w-screen fixed top-0 left-0 right-0 bottom-0 flex justify-end h-screen bg-black bg-opacity-75 z-50'>
			<div className='w-4/5 max-w-lg xl:w-80 h-screen bg-opacity-100  bg-white animate-fadeInRight' ref={ref}>
				<div className='flex justify-end h-24 border-b-2 border-gray-200 pr-5'>
					<button onClick={() => toggleSidebarFn()}>
						<Close />
					</button>
				</div>
				<ul className='flex flex-col min-h-almost-screen p-5'>
					<li className='h-12 pl-5 bg-purple-500 rounded-lg flex items-center text-white'>Sign Up</li>
					<li className='h-12 pl-5 flex items-center' style={{ color: '#909da7' }}>
						Login
					</li>
					<li className='h-12 pl-5 flex items-center' style={{ color: '#909da7' }}>
						My Cart
					</li>
					<li className='h-12 pl-5 flex items-center' style={{ color: '#909da7' }}>
						My Favorites
					</li>
					<li className='h-12 pl-5 flex items-center mt-auto' style={{ color: '#909da7' }}>
						Sign out
					</li>
				</ul>
			</div>
		</div>
	);
};
Sidebar.propTypes = {
	toggleSidebarFn: PropTypes.func,
};

export default Sidebar;
