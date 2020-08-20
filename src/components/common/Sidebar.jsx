import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import useBodyLock from 'hooks/useBodyLock';
import useOnClickOutside from 'hooks/useOutsideClick';
import Close from 'components/Icons/Close';
import { useSpring, animated } from 'react-spring';

const Sidebar = ({ toggleSidebarFn }) => {
	const animationProps = useSpring({ width: 100, from: 0 });
	const ref = useRef();
	useOnClickOutside(ref, () => toggleSidebarFn());
	useBodyLock();
	return (
		<div className='w-screen fixed top-0 left-0 right-0 bottom-0 flex justify-end h-screen bg-black bg-opacity-75 z-50'>
			<div className='w-4/5 max-w-lg xl:w-80 h-screen bg-opacity-100  bg-white animate-fadeInRight' ref={ref}>
				<div className='flex justify-end items-center h-24 border-b-2 border-gray-200 pr-5'>
					<button onClick={() => toggleSidebarFn()}>
						<Close />
					</button>
				</div>
			</div>
		</div>
	);
};
Sidebar.propTypes = {
	toggleSidebarFn: PropTypes.func,
};

export default Sidebar;
