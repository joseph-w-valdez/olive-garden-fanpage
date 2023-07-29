'use client'
import Image from "next/image";
import Breadsticks from "../assets/images/breadsticks.png"
import { useRandomItem } from "../contexts/SpinnerResultContext";

export default function Results(){
     const { randomItem } = useRandomItem();

    return(
        <section className="w-full h-[100vh] bg-[#DDBEA9] text-black flex flex-col justify-center items-center text-left" id="spinner-result">
            <div className="text-left">
                {randomItem && (
                    <>
                        <Image
                          src={randomItem.image}
                          alt={randomItem.alt}
                          width={580}
                          height={580}
                        />
                        <h1 className="text-4xl">{randomItem.name}</h1>
                        <h3 className="text-xl">{randomItem.category}</h3>
                        <p className="text-lg">{randomItem.description}</p>
                        <p className="text-lg">{`Price: ${randomItem.price}`}</p>
                    </>
                )}
                {!randomItem && (
                <>
                    <Image src={Breadsticks} alt="breadsticks" />
                    <h1 className="text-4xl">Unlimited Breadsticks!</h1>
                    <h3 className="text-xl">Appetizer</h3>
                    <p className="text-lg">Our breadsticks are heated up in the microwave by the hundreds.</p>
                    <p className="text-lg">Price: FREE UNLIMITED!!</p>
                </>)}
            </div>
        </section>
    );

}
