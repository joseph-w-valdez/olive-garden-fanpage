import Image from "next/image";
import WaiterBackground from '../assets/images/waiter-background-spinner.png'

export default function Spinner(){
    return (
        <div className="relative flex flex-wrap justify-center items-center">
            <Image
            className="w-full h-[calc(100vh-8rem)]"
            src={WaiterBackground}
            objectFit="cover"
            alt="Background Waiter Image" />
            <button className="absolute text-xl bottom-[5rem] py-3 px-5 btn bg-black bg-opacity-50 border-4 border-white hover:bg-opacity-75 shadow-md text-white font-extrabold rounded">SPIN</button>
            <div className="absolute text-center bottom-[5rem] right-[5rem] text-black hidden lg:block">
                <h1 className="text-2xl">Savor The Unexpected</h1>
                <p className="text-base">Olive Garden&apos;s Roulette of Culinary Treasures</p>
            </div>
        </div>
        );
}