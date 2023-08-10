'use client'
import Image from "next/image";
import Breadsticks from "../assets/images/breadsticks.png"
import { useFinalMenuItem } from "../contexts/SpinnerResultContext";

export default function Results() {
    const { finalMenuItem } = useFinalMenuItem();

    return (
        <div className="pt-20 w-full lg:h-minus-navbar py-8 lg:py-0 bg-[#DDBEA9] text-black flex flex-col justify-center items-center text-left" id="spinner-result">
            <div className="text-left flex flex-wrap px-12 w-full md:w-1/2 xl:w-1/3 landscape-sm:w-full">
                {finalMenuItem && (
                    <div className="flex flex-col landscape-sm:flex-row justify-center landscape-sm:justify-between items-center">
                        <div className="w-full landscape-sm:w-1/2 landscape-sm:max-w-[50vw]">
                            <Image
                                src={finalMenuItem.image} alt={finalMenuItem.alt}
                                width={580} height={580} sizes="100vw"
                                className="object-cover"
                                priority
                            />
                        </div>
                        <div className="text-center mt-2 landscape-sm:w-1/2">
                            <h1 className="text-4xl">{finalMenuItem.name}</h1>
                            <h3 className="text-md italic">{finalMenuItem.category}</h3>
                            <p className="text-lg">{finalMenuItem.description}</p>
                            <p className="text-lg font-bold">{`Price: ${finalMenuItem.price}`}</p>
                        </div>
                    </div>
                )}
                {!finalMenuItem && (
                    <div className="flex flex-col landscape-sm:flex-row lg:flex-col justify-center landscape-sm:justify-between items-center">
                        <div className="w-full landscape-sm:w-1/2 mx-2">
                            <Image
                                src={Breadsticks} alt='breadsticks'
                                height={0} width={0} sizes='100vw'
                                className='object-cover'
                                priority
                            />
                        </div>
                        <div className="text-center mt-2 landscape-sm:w-1/2">
                            <h1 className="text-xl">Unlimited Breadsticks!</h1>
                            <h3 className="text-md italic">Appetizer</h3>
                            <p className="text-lg">Our breadsticks are heated up in the microwave by the hundreds.</p>
                            <p className="text-lg font-bold">Price: FREE UNLIMITED!!</p>
                        </div>
                    </div>)}
            </div>
        </div>
    );

}
