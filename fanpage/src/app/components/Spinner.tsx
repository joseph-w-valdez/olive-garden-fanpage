'use client'
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import WaiterBackground from '../assets/images/waiter-background-spinner.png';
import DishLid from '../assets/images/waiter-lid-spinner.png';
import axios from "axios";
import { MenuItem } from "../types/MenuItem";
import { shuffleArray } from "../utilities/shuffle";
import { moveLidUp, moveLidDown } from "../utilities/lidAnimations";
import { useRandomItem } from "../contexts/SpinnerResultContext";
import { useRouter } from "next/navigation";
import RouletteBar from "./RouletteBar";

export default function Spinner() {
    const [items, setItems] = useState<MenuItem[]>([]);
    const [lidCovered, setLidCovered] = useState(true);
    const [isWaiting, setIsWaiting] = useState(false);
    const { randomItem, setRandomItem } = useRandomItem();
    const backgroundRef = useRef<HTMLImageElement>(null);
    const router = useRouter();

    const fetchRandomItems = async () => {
        try {
            const response = await axios.get("/api/menu.json");
            const randomItems = shuffleArray(response.data as MenuItem[]).slice(0, 10);
            setItems(randomItems);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const setRandomMenuItem = () => {
        if (items && items.length > 0) {
            const resultedItem = shuffleArray(items).slice(0, 1)[0];
            setRandomItem(resultedItem);
        }
    };

    useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        setIsWaiting(false);
        isScrolling = true;
      }
    };

    if (items && items.length > 0) {
      if (!lidCovered) {
        moveLidDown(backgroundRef, setLidCovered);
        setTimeout(() => moveLidUp(backgroundRef, setLidCovered), 800);
        setTimeout(() => {
          router.push("#spinner-result");
          isScrolling = false;
        }, 6500);
      } else {
        moveLidUp(backgroundRef, setLidCovered);
        setTimeout(() => {
          router.push("#spinner-result");
          isScrolling = false;
        }, 6500);
      }
      setRandomMenuItem();
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

    const handleButtonClick = () => {
        if (!isWaiting) {
        setIsWaiting(true);
        fetchRandomItems();
        }
    };

    const buttonClassNames = {
    base: "absolute text-xl bottom-[10%] py-3 px-5 btn",
    background: isWaiting ? "bg-red-500 cursor-not-allowed" : "bg-black bg-opacity-50",
    border: "border-4 border-gray-300 rounded",
    hover: isWaiting ? "hover:bg-red-500" : "hover:bg-opacity-75",
    text: "text-white font-extrabold",
    pointerEvents: isWaiting ? "pointer-events-none" : "pointer-events-auto",
    activeBackground: isWaiting ? "active:bg-red-500" : "active:bg-opacity-75",
    shadow: "shadow-xl",
    activeShadow: "active:shadow-md",
  };

    return (
        <section className="relative flex flex-wrap justify-center items-center">
            <div className="relative left-0 w-full h-full overflow-hidden">
                <Image
                    className="w-full max-w-[1250px] h-full max-h-[1000px]"
                    src={WaiterBackground}
                    objectFit="cover"
                    alt="Background Waiter Image"
                />
                <Image
                    ref={backgroundRef}
                    className="w-full max-w-[1250px] h-full max-h-[1000px] absolute top-0"
                    src={DishLid}
                    objectFit="cover"
                    alt="Dish Lid"
                />
                <RouletteBar fadeAnimation={lidCovered ? 'animate-fade-out' : 'animate-fade-in'} items={items} selectedItem={randomItem} />
            </div>
             <button
                className={`
                  ${buttonClassNames.base}
                  ${buttonClassNames.background}
                  ${buttonClassNames.border}
                  ${buttonClassNames.hover}
                  ${buttonClassNames.text}
                  ${buttonClassNames.pointerEvents}
                  ${buttonClassNames.activeBackground}
                  ${buttonClassNames.shadow}
                  ${buttonClassNames.activeShadow}`}
                onClick={handleButtonClick}
                disabled={isWaiting}
            >
                {isWaiting ? "WAIT" : "SPIN"}
            </button>
            <div className="absolute text-center bottom-[10%] right-[5rem] text-black hidden lg:block">
                <h1 className="text-2xl">Savor The Unexpected</h1>
                <p className="text-base">Olive Garden&apos;s Roulette of Culinary Treasures</p>
            </div>
        </section>
    );
}
