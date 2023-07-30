'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MenuItem } from '../types/MenuItem';

type FadeAnimationType = 'animate-fade-in' | 'animate-fade-out';

interface RouletteBarProps {
  fadeAnimation: FadeAnimationType;
  items: MenuItem[];
  selectedItem: MenuItem | null;
}

const RouletteBar: React.FC<RouletteBarProps> = ({ fadeAnimation, items, selectedItem }) => {
  const [duplicatedItems, setDuplicatedItems] = useState<MenuItem[]>([]);
  const barAnimation = fadeAnimation === 'animate-fade-in' ? 'animate-background-in' : 'animate-background-out'
  const titleAnimation = fadeAnimation === 'animate-fade-in' ? 'animate-title-in' : 'animate-title-out'
  const conveyorAnimation = fadeAnimation === 'animate-fade-in' ? 'animate-conveyor-belt' : ''

  useEffect(() => {
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  return (
    <>
      <div className={`w-full h-0 absolute top-[25%] bg-black transition duration-150 ease-linear ${barAnimation}`}></div>
      <div className={`w-full h-0 absolute top-[25%] opacity-0 transition duration-150 ease-linear ${fadeAnimation} flex `}>
        {duplicatedItems.map((item, index)=> (
            <Image
              key={index} src={item.image} alt={item.alt} width={200} height={200}
              className={`mx-4 my-6 ${conveyorAnimation}`}
            />
          ))}
      </div>
      <h1 className={`w-full absolute ml-6 bottom-[15%] text-right pr-12 text-7xl text-black ${titleAnimation} transition duration-150 ease-linear`}>{selectedItem?.name}</h1>
    </>
    )
};

export default RouletteBar;
