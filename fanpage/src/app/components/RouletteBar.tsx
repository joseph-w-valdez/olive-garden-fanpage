import React from 'react';

type FadeAnimationType = 'animate-fade-in' | 'animate-fade-out';

interface RouletteBarProps {
  fadeAnimation: FadeAnimationType;
}

const RouletteBar: React.FC<RouletteBarProps> = ({ fadeAnimation }) => {
  const animationClass = fadeAnimation

  return <div className={`w-full h-0 absolute top-[25%] bg-black opacity-0 transition duration-150 ease-linear ${animationClass}`}></div>;
};

export default RouletteBar;
