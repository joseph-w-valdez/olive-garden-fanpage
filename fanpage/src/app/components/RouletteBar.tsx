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
  const [matchedPosition, setMatchedPosition] = useState<number>(0);
  const barAnimation = fadeAnimation === 'animate-fade-in' ? 'animate-background-in' : 'animate-background-out'
  const titleAnimation = fadeAnimation === 'animate-fade-in' ? 'animate-title-in' : 'animate-title-out'

  useEffect(() => {
    setDuplicatedItems([...items, ...items, ...items]);
  }, [items]);

  const getSecondMatchingIndex = (items: MenuItem[], itemToFind: MenuItem | null): number => {
    if (!itemToFind) return -1;

    const firstIndex = items.findIndex(item => item === itemToFind);

    if (firstIndex === -1) return -1;

    const secondIndex = items.findIndex((item, idx) => idx > firstIndex && item === itemToFind);

    return secondIndex;
  }

  useEffect(()=>{
    const index = getSecondMatchingIndex(duplicatedItems, selectedItem);
    const rightPosition = index * 232 - (232*2.6);
    console.log(rightPosition)
    setMatchedPosition(rightPosition)
  },[duplicatedItems, selectedItem])

  return (
    <>
      <div className={`w-full h-0 absolute top-[25%] bg-black transition duration-150 ease-linear ${barAnimation}`}></div>
      <div
        className={`w-full h-0 absolute top-[25%] ${fadeAnimation} flex `}
        style={{ right: `${matchedPosition}px`, transition: `right 4000ms ease-linear` }}
      >
        {duplicatedItems.map((item, index)=> (
            <Image
              key={index} src={item.image} alt={item.alt} width={200} height={200}
              className='mx-4 my-6'
            />
          ))}
      </div>
      <h1 className={`w-full absolute ml-6 bottom-[15%] text-right pr-12 text-7xl text-black ${titleAnimation} transition duration-150 ease-linear`}>{selectedItem?.name}</h1>
    </>
    )
};

export default RouletteBar;
