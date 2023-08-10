'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { MenuItem } from '../types/MenuItem';
import { useFinalMenuItem } from "../contexts/SpinnerResultContext"
import { useThirdIndex } from '../hooks/useThirdIndex';

type FadeAnimationType = 'animate-fade-in' | 'animate-fade-out';

interface RouletteBarProps {
  fadeAnimation: FadeAnimationType;
  items: MenuItem[];
}

const RouletteBar: React.FC<RouletteBarProps> = ({ fadeAnimation, items }) => {
  const [duplicatedItems, setDuplicatedItems] = useState<MenuItem[]>([]);
  const [matchedPosition, setMatchedPosition] = useState<number>(0);
  const [transitionDelay, setTransitionDelay] = useState<number>(0);
  const [transitionDuration, setTransitionDuration] = useState<number>(0);
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const { finalMenuItem } = useFinalMenuItem()

  // change the word fade for either background or title
  const barAnimation = fadeAnimation === 'animate-fade-in' ? 'animate-background-in' : 'animate-background-out'

  useEffect(() => {
    // Duplicate the items when the items value changes to show illusion of looping effect
    setDuplicatedItems([...items, ...items, ...items, ...items]);
  }, [items])

   useEffect(() => {
    if (typeof window !== 'undefined') {
      setViewportWidth(window.innerWidth);

      const handleWindowResize = () => {
        setViewportWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleWindowResize);

      // Cleanup the event listener on unmount
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  }, []);

  const thirdIndex = useThirdIndex(() => duplicatedItems, finalMenuItem);

  useEffect(() => {

    // Reset the matched position to the starting position
    setTransitionDelay(0);
    setTimeout(() => {
      setTransitionDuration(0);
    }, 10);
    setTimeout(() => {
      setMatchedPosition(0);
    }, 10);

  // TO-DO: make responsive up to 4100 px vw
  // calculate a refinement factor to center the selected dish to be underneath the cover

  if (typeof window !== 'undefined') {

   const getRefinementFactor = (): number => {
    if (viewportWidth > 0 && viewportWidth <= 1200) {
      return 2.2;
    } else if (viewportWidth <= 1920) {
      const upperResolution = 1920
      const lowerResolution = 1200
      // Linearly interpolate between 2.2 and 1.25 for values between 1200 and 1920
      const scalingModifier = (1.25 - 2.2) / (upperResolution - lowerResolution);
      return scalingModifier * (viewportWidth - 1200) + 2.2;
    } else {
      return 0.4
    }
  };

      const handleResize = () => {
        const refinementFactor = getRefinementFactor();
        const rightPosition = (thirdIndex - refinementFactor) * 22;
        setTransitionDelay(1500);
        setTransitionDuration(3000);
        setMatchedPosition(rightPosition);
      };

      setTimeout(() => {
        handleResize();
      }, 1500);
    }
  }, [duplicatedItems, finalMenuItem, viewportWidth, thirdIndex]);


  return (
    <>
      <div className={`w-full h-[26%] top-[26%] absolute bg-black transition duration-150 ease-linear ${barAnimation}`}></div>
      <div
        className={`h-[26%] absolute top-[12%] left-0 transition delay-[${transitionDelay}ms] ease-linear flex`}
        style={{
          transform: `translateX(-${matchedPosition}vw)`,
          transitionDuration: `${transitionDuration}ms`
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div key={index} className='w-[20vw] relative m-[1vw] mt-[2vw] overflow-hidden'>
            <Image
              src={item.image} alt={item.alt} height={0} width={0} sizes='100vw'
              className={`${index} object-cover ${fadeAnimation}`}
              priority
              fill
            />
          </div>
        ))}
      </div>
    </>
  )
};

export default RouletteBar;
