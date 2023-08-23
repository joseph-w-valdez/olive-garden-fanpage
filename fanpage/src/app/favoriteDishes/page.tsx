import Image from "next/image"
import breadsticks from "../assets/images/breadsticks.png"
import { AiFillHeart } from "react-icons/ai";

export default function FavoriteDishes() {
    return (
        <section>
            <h1 className="text-center text-xl font-bold pt-5 md:text-3xl">Favorite Dishes</h1>
            <div className="md:flex md:flex-wrap md:justify-evenly pb-2">

                <div className="flex mt-10 bg-[#DDBEA9] h-40 items-center md:bg-inherit md:flex-col md:items-start md:h-auto">
                    <div className="ml-4 flex justify-center">
                        <Image src={breadsticks} alt='breadsticks' className="w-48 md:w-80" />
                    </div>
                    <div className="flex flex-col items-center w-1/2 justify-evenly h-28 md:items-center md:w-full">
                        <p className="text-xl font-bold md:text-2xl">Breadsticks</p>
                        <div className="flex items-center gap-x-2">
                            <AiFillHeart size={20} />
                            <span className="text-sm md:text-base">Unfavorite</span>
                        </div>
                        <button className="rounded-md bg-green-800 py-1 px-2 mt-2 text-white">View Dish</button>
                    </div>
                </div>

                <div className="flex mt-10 bg-[#DDBEA9] h-40 items-center md:bg-inherit md:flex-col md:items-start md:h-auto">
                    <div className="ml-4 flex justify-center">
                        <Image src={breadsticks} alt='breadsticks' className="w-48 md:w-80" />
                    </div>
                    <div className="flex flex-col items-center w-1/2 justify-evenly h-28 md:items-center md:w-full">
                        <p className="text-xl font-bold md:text-2xl">Breadsticks</p>
                        <div className="flex items-center gap-x-2">
                            <AiFillHeart size={20} />
                            <span className="text-sm md:text-base">Unfavorite</span>
                        </div>
                        <button className="rounded-md bg-green-800 py-1 px-2 mt-2 text-white">View Dish</button>
                    </div>
                </div>

                <div className="flex mt-10 bg-[#DDBEA9] h-40 items-center md:bg-inherit md:flex-col md:items-start md:h-auto">
                    <div className="ml-4 flex justify-center">
                        <Image src={breadsticks} alt='breadsticks' className="w-48 md:w-80" />
                    </div>
                    <div className="flex flex-col items-center w-1/2 justify-evenly h-28 md:items-center md:w-full">
                        <p className="text-xl font-bold md:text-2xl">Breadsticks</p>
                        <div className="flex items-center gap-x-2">
                            <AiFillHeart size={20} />
                            <span className="text-sm md:text-base">Unfavorite</span>
                        </div>
                        <button className="rounded-md bg-green-800 py-1 px-2 mt-2 text-white">View Dish</button>
                    </div>
                </div>

                <div className="flex mt-10 bg-[#DDBEA9] h-40 items-center md:bg-inherit md:flex-col md:items-start md:h-auto">
                    <div className="ml-4 flex justify-center">
                        <Image src={breadsticks} alt='breadsticks' className="w-48 md:w-80" />
                    </div>
                    <div className="flex flex-col items-center w-1/2 justify-evenly h-28 md:items-center md:w-full">
                        <p className="text-xl font-bold md:text-2xl">Breadsticks</p>
                        <div className="flex items-center gap-x-2">
                            <AiFillHeart size={20} />
                            <span className="text-sm md:text-base">Unfavorite</span>
                        </div>
                        <button className="rounded-md bg-green-800 py-1 px-2 mt-2 text-white">View Dish</button>
                    </div>
                </div>

            </div>
        </section>
    )
}