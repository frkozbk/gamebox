import React from 'react';
import GameIcon from 'components/Icons/GameIcon';
const Navbar = () => {
  return (
    <nav className="flex w-screen px-48 h-24 border-b border-gray-200 shadow-md justify-between items-center">
      <div className="w-auto flex items-center justify-between">
        <GameIcon />
        <p className="text-2xl font-bold text-purple-600">GameBox</p>
      </div>
    </nav>
  );
};

export default Navbar;
