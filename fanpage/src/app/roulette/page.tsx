'use client'
import { useState, useEffect } from "react";
import Spinner from '../components/spinner'
import Results from '../components/results'

interface MenuItem {
  alt: string;
  category: string;
  description: string;
  image: string;
  name: string;
  price: number;
  type: string;
}

async function fetchMenuData() {
  try {
    const response = await fetch('/api/menu.json');
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }
    const menuData = await response.json();
    return menuData;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    throw error;
  }
}

export default function RoulettePage() {
  const [menu, setMenu] = useState<MenuItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const menuData = await fetchMenuData();
        setMenu(menuData)
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        console.log('menu state', menu)
      }
    }
    fetchData();
  }, []);


  return (
      <div className="relative bg-white w-full flex flex-col item-center justify-center">
        <Spinner />
        <section className="text-center text-black py-10 block lg:hidden">
          <h1 className="text-7xl my-10">Savor The Unexpected</h1>
          <p className="text-3xl">Olive Garden&apos;s Roulette of Culinary Treasures</p>
        </section>
        <Results />
        {menu && menu.map((item: MenuItem, index: number) => (
          <div key={index} className="text-black">
            <h3>{item.name}</h3>
            <h5>{item.price}</h5>
          </div>
        ))}
      </div>
  )
}
