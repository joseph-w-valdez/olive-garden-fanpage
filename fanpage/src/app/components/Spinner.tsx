'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import WaiterBackground from '../assets/images/waiter-background-spinner.png'
import DishLid from '../assets/images/waiter-lid-spinner.png'
import { shuffleArray } from "../utilities/shuffle";
import { useRandomItem } from "../contexts/SpinnerResultContext";
import axios from "axios";
import { MenuItem } from "../types/MenuItem";
import { useRouter } from "next/navigation";

export default function Spinner(){
    const [items, setItems] = useState<MenuItem[]>([]);
    const { setRandomItem } = useRandomItem();
    const router = useRouter()

    const fetchTenItems = async () => {
        try {
          const response = await axios.get("/api/menu.json");
          const randomItems = shuffleArray(response.data as MenuItem[]).slice(0, 10);
          setItems(randomItems);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };


     useEffect(() => {
        if (items.length > 0) {
            const resultedItem = shuffleArray(items).slice(0, 1)[0];
            setRandomItem(resultedItem);
            router.push('#spinner-result')
        }
    }, [items]);

    return (
        <section className="relative flex flex-wrap justify-center items-center">
            <div className="relative left-0 w-full h-full">
                <Image
                    className="w-full max-w-[1250px] h-full max-h-[1000px]"
                    src={WaiterBackground}
                    objectFit="cover"
                    alt="Background Waiter Image"
                />
                <Image
                    className="w-full max-w-[1250px] h-full max-h-[1000px] absolute top-0"
                    src={DishLid}
                    objectFit="cover"
                    alt="Background Waiter Image"
                />
            </div>
            <button
                className="absolute text-xl bottom-[5rem] py-3 px-5 btn bg-black bg-opacity-50 border-4 border-white hover:bg-opacity-75 shadow-md text-white font-extrabold rounded"
                onClick={fetchTenItems}
            >
                SPIN</button>
            <div className="absolute text-center bottom-[5rem] right-[5rem] text-black hidden lg:block">
                <h1 className="text-2xl">Savor The Unexpected</h1>
                <p className="text-base">Olive Garden&apos;s Roulette of Culinary Treasures</p>
            </div>
        </section>
        );
}
