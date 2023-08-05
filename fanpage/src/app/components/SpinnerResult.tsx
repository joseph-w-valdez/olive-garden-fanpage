'use client'
import Image from "next/image";
import Breadsticks from "../assets/images/breadsticks.png"
import { useFinalMenuItem } from "../contexts/SpinnerResultContext";

export default function Results() {
    const { finalMenuItem } = useFinalMenuItem();

    return (
        <section className="w-full h-[100vh] bg-[#DDBEA9] text-black flex flex-col justify-center items-center text-left" id="spinner-result">
            <div className="text-left flex flex-wrap px-12 w-full md:w-1/2 xl:w-1/3">
                {finalMenuItem && (
                    <>
                        <Image
                            src={finalMenuItem.image}
                            alt={finalMenuItem.alt}
                            width={580}
                            height={580}
                        />
                        <h1 className="text-4xl">{finalMenuItem.name}</h1>
                        <h3 className="text-md italic">{finalMenuItem.category}</h3>
                        <p className="text-lg">{finalMenuItem.description}</p>
                        <p className="text-lg font-bold">{`Price: ${finalMenuItem.price}`}</p>
                    </>
                )}
                {!finalMenuItem && (
                    <>
                        <Image src={Breadsticks} alt="breadsticks" />
                        <h1 className="text-4xl">Unlimited Breadsticks!</h1>
                        <h3 className="text-md italic">Appetizer</h3>
                        <p className="text-lg">Our breadsticks are heated up in the microwave by the hundreds.</p>
                        <p className="text-lg font-bold">Price: FREE UNLIMITED!!</p>
                    </>)}
            </div>
        </section>
    );

}
