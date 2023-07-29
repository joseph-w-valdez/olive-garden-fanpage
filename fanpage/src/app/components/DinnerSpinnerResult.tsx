import Image from "next/image";
import Breadsticks from "../assets/images/breadsticks.png"



export default function Results(){
    return(
        <section className="w-full h-[100vh] bg-[#DDBEA9] text-black flex flex-col justify-center items-center text-left">
            <div className="text-left">
                <Image src={Breadsticks} alt="breadsticks" />
                <h1 className="text-4xl">Breadsticks</h1>
                <h3 className="text-xl">Unlimited Breadsticks</h3>
                <p className="text-lg">Our breadsticks are heated up in the microwave by the hundreds.</p>
            </div>
        </section>
    );

}
