import React from 'react';

interface RouletteBarProps {
  fadeIn: boolean;
}

const RouletteBar: React.FC<RouletteBarProps> = ({ fadeIn }) => {
  const animationClass = fadeIn ? 'animate-fade-out' : 'animate-fade-in';

  return <div className={`w-full h-0 absolute top-[225px] bg-black opacity-0 transition duration-150 ease-linear ${animationClass}`}></div>;
};

export default RouletteBar;
