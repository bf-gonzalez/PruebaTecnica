import React from 'react';

const Home: React.FC = () => {
  return (
    <div 
      className="p-8 h-screen bg-cover bg-center flex items-center justify-center relative"
      style={{ backgroundImage: 'url(https://fotos.perfil.com//2022/08/30/900/0/copas-de-vinos-20220830-1410586.jpg)' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> 
      <div className="text-center relative z-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Welcome to Chin-Chin!
        </h1>
        <p className="text-lg text-white mt-4 font-semibold">Experts in Drinks</p> 
      </div>
    </div>
  );
};

export default Home;