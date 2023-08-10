import Image from "next/image"
import vin from "../assets/images/vin.jpeg"

export default function Welcome() {
    return (
        <section className="flex flex-col items-center text-center red-hat text-3xl mt-5 lg:h-minus-navbar">
            <h1>Welcome Home!</h1>
            <p className="text-xl mt-3">Where Family, Friends, and Flavor Meet</p>
            <div className="w-full max-w-[1000px] h-fit pt-6">
                <Image
                    src={vin}
                    alt='vin welcomes you to the family'
                    width={0}
                    height={0}
                    sizes='100vw'
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    )
}
