'use client'
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import WaiterBackground from '../assets/images/waiter-background-spinner.png';
import DishLid from '../assets/images/waiter-lid-spinner.png';
import axios from "axios";
import { MenuItem } from "../types/MenuItem";
import { shuffleArray } from "../utilities/shuffle";
import { moveLidUp, moveLidDown } from "../utilities/lidAnimations";
import { useFinalMenuItem } from "../contexts/SpinnerResultContext";
import { useRouter } from "next/navigation";
import RouletteBar from "./RouletteBar";
import RouletteButton from "./RouletteButton";
import { randomBytes } from "crypto";

export default function Spinner() {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [lidCovered, setLidCovered] = useState(true);
  const [isWaiting, setIsWaiting] = useState(false);
  const [finalItem, setFinalItem] = useState(false);
  const { finalMenuItem, setFinalMenuItem } = useFinalMenuItem();
  const lidRef = useRef<HTMLImageElement>(null);
  const router = useRouter();

  const fetchRandomItems = async () => {
    try {
      const response = await axios.get("/api/menu.json");
      const randomDishes = shuffleArray(response.data as MenuItem[]).slice(0, 10);
      setItems(randomDishes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const pickRandomMenuItem = () => {
    setFinalItem(false);
    if (items && items.length > 0) {
      const finalDish = shuffleArray(items).slice(0, 1)[0];
      setFinalMenuItem(finalDish);
      setTimeout(() => setFinalItem(true), 4400)
    }
  };

  useEffect(() => {
    if (items && items.length > 0) {
      if (!lidCovered) {
        moveLidDown(lidRef, setLidCovered);
        setTimeout(() => moveLidUp(lidRef, setLidCovered), 800);
      } else {
        moveLidUp(lidRef, setLidCovered);
      }
      // Timer for when the roulette wheel finishes and scrolls down to SpinnerResult.
      setTimeout(() => {
        router.push("#spinner-result");
      }, 5500);
      // Timer for re-enabling spin button
      setTimeout(() => {
        setIsWaiting(!isWaiting);
      }, 6500);
      pickRandomMenuItem();
    }
  }, [items]);

  const handleButtonClick = () => {
    if (!isWaiting) {
      setIsWaiting(true);
      fetchRandomItems();
    }
  };

  const titleAnimation = lidCovered ? 'animate-title-out' : 'animate-title-in'

  return (
    <div className="relative flex flex-wrap justify-center items-center h-auto">
      <div className="relative w-full h-full overflow-hidden">
        <Image
          className="w-full max-w-[1700px] h-full max-h-[calc(100vh-3rem)]"
          src={WaiterBackground}
          alt="Background Waiter Image"
        />
        <Image
          ref={lidRef}
          className="w-full max-w-[1700px] h-full absolute top-0"
          src={DishLid}
          alt="Dish Lid"
        />
        <RouletteBar fadeAnimation={lidCovered ? 'animate-fade-out' : 'animate-fade-in'} items={items} />
      </div>
      <div className="flex justify-end w-full">
        {finalItem && <h1 className={`w-[40%] xl:w-1/2 text-black absolute ml-6 bottom-[15%] hidden lg:block text-right pr-12 text-5xl xl:text-6xl ${titleAnimation} transition duration-150 ease-linear`}>{finalMenuItem?.name}</h1>}
      </div>
      <RouletteButton waiting={isWaiting} click={handleButtonClick} />
      <div className="absolute text-center bottom-[10%] right-[5rem] text-black hidden lg:block">
        <h1 className="text-4xl lora">Savor The Unexpected</h1>
        <p className="text-xl red-hat">Olive Garden&apos;s Roulette of Culinary Treasures</p>
      </div>
    </div>
  );
}
