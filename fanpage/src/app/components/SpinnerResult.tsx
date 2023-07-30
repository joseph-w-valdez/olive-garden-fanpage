'use client'
import Image from "next/image";
import Breadsticks from "../assets/images/breadsticks.png"
import { useRandomItem } from "../contexts/SpinnerResultContext";
import FlexBasisFull from "./FlexBasisFull";

export default function Results(){
     const { randomItem } = useRandomItem();

    return(
        <section className="w-full h-[100vh] bg-[#DDBEA9] text-black flex flex-col justify-center items-center text-left" id="spinner-result">
            <div className="text-left flex flex-wrap px-12 w-full md:w-1/2 xl:w-1/3">
                {randomItem && (
                    <>
                        <Image
                          src={randomItem.image}
                          alt={randomItem.alt}
                          width={580}
                          height={580}
                        />
                        <FlexBasisFull />
                        <h1 className="text-4xl">{randomItem.name}</h1>
                        <FlexBasisFull />
                        <h3 className="text-md italic">{randomItem.category}</h3>
                        <FlexBasisFull />
                        <p className="text-lg">{randomItem.description}</p>
                        <FlexBasisFull />
                        <p className="text-lg font-bold">{`Price: ${randomItem.price}`}</p>
                    </>
                )}
                {!randomItem && (
                <>
                    <Image src={Breadsticks} alt="breadsticks" />
                    <FlexBasisFull />
                    <h1 className="text-4xl">Unlimited Breadsticks!</h1>
                    <FlexBasisFull />
                    <h3 className="text-md italic">Appetizer</h3>
                    <FlexBasisFull />
                    <p className="text-lg">Our breadsticks are heated up in the microwave by the hundreds.</p>
                    <FlexBasisFull />
                    <p className="text-lg font-bold">Price: FREE UNLIMITED!!</p>
                </>)}
            </div>
        </section>
    );

}
