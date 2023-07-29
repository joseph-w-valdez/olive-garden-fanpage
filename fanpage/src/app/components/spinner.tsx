import React, { useEffect, useState } from "react";
import Image from "next/image";
import WaiterBackground from '../assets/images/waiter-background-spinner.png'
import { shuffleArray } from "../utilities/shuffle";
import axios from "axios";

interface MenuItem {
    alt: string;
    category: string;
    description: string;
    image: string;
    name: string;
    price: number;
    type: string;
  }

export default function Spinner(){
    const [items, setItems] = useState<MenuItem[]>([]);

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
            const itemsCopy = [...items]
            const randomItem = shuffleArray(itemsCopy).slice(0, 1);
        }
    }, [items]);

    return (
        <section className="relative flex flex-wrap justify-center items-center">
            <Image
                className="w-full h-[calc(100vh-8rem)]"
                src={WaiterBackground}
                objectFit="cover"
                alt="Background Waiter Image"
            />
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
