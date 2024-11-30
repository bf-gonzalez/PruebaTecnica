import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ imageUrl, title }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <h2 className="text-xl font-semibold text-center">{title}</h2>
      </div>
    </div>
  );
};

export default Card;