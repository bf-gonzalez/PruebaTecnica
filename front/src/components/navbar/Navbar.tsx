import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 shadow-lg z-10 border-b-2 border-gray-400">
      <div className="flex justify-center items-center space-x-8">
        <Link to="/home" className="text-white text-lg font-semibold hover:text-gray-300">
          Home
        </Link>
        <Link to="/bebidas" className="text-white text-lg font-semibold hover:text-gray-300">
          Bebidas
        </Link>
        <Link to="/crear" className="text-white text-lg font-semibold hover:text-gray-300">
          Crear
        </Link>
      </div>
    </div>
  );
};

export default Navbar;