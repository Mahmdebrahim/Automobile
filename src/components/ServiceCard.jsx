import React from 'react';

const ServiceCard = ({ title, description, icon, variant = 'white' }) => {
  return (
    <div className={`card text-center flex flex-col items-center justify-center min-h-[264px] ${variant === 'borderless' ? 'bg-transparent border-none shadow-none p-0' : ''}`}>
      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${variant === 'borderless' ? 'bg-premium-red/15 text-premium-red' : 'bg-premium-red text-white'}`}>
        {icon}
      </div>
      <h3 className="mb-4">{title}</h3>
      <p className="text-dark-mauve">{description}</p>
    </div>
  );
};

export default ServiceCard;
