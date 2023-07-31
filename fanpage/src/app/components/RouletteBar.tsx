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
  const [transitionDelay, setTransitionDelay] = useState<number>(0);
  const [transitionDuration, setTransitionDuration] = useState<number>(0);

  useEffect(() => {

  // Duplicate the items
  setDuplicatedItems([...items, ...items, ...items, ...items]);
}, [items])

  const getThirdMatchingIndex = (items: MenuItem[], itemToFind: MenuItem | null): number => {
    if (!itemToFind) return -1;

    const firstIndex = items.findIndex(item => item === itemToFind);

    if (firstIndex === -1) return -1;

    const secondIndex = items.findIndex((item, idx) => idx > firstIndex && item === itemToFind);

    if (secondIndex === -1) return -1;

    const thirdIndex = items.findIndex((item, idx) => idx > secondIndex && item === itemToFind);

    return thirdIndex;
  }


  useEffect(() => {
    // Reset the matched position to the starting position
    setTransitionDelay(0);
    setTransitionDuration(0);
    setMatchedPosition(0);

    // Wait a tick to give React time to render the reset position
    setTimeout(() => {
      const index = getThirdMatchingIndex(duplicatedItems, selectedItem);
      const rightPosition = index * 232 - (232*2.6);
      setMatchedPosition(rightPosition);
      setTransitionDelay(1500);
      setTransitionDuration(3000);
    }, 400); // Timeout to ensure the new matched position starts after resetting the position and after the dish opening animation is done

  }, [duplicatedItems, selectedItem]);


  return (
    <>
      <div className={`w-full h-0 absolute top-[26%] bg-black transition duration-150 ease-linear ${barAnimation}`}></div>
      <div
        className={`w-full h-fit absolute top-[23%] left-0 transition delay-[${transitionDelay}ms] ease-linear flex`}
        style={{
        transform: `translateX(-${matchedPosition}px)`,
        transitionDuration: `${transitionDuration}ms`
      }}
      >
        {duplicatedItems.map((item, index)=> (
            <Image
              key={index} src={item.image} alt={item.alt} width={200} height={200}
              className={`mx-4 my-6 w-[200px] relative ${fadeAnimation}`}
            />
          ))}
      </div>
      <h1 className={`w-full absolute ml-6 bottom-[15%] text-right pr-12 text-7xl text-black ${titleAnimation} transition duration-150 ease-linear`}>{selectedItem?.name}</h1>
    </>
    )
};

export default RouletteBar;
