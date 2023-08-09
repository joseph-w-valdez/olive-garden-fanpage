import Image from "next/image"
import placeholder from "../assets/images/vin.jpeg"

export default function Welcome() {
    return (
        <section className="flex flex-col items-center text-center red-hat text-3xl mt-5 lg:h-minus-navbar">
            <h1>Welcome Home!</h1>
            <p className="text-xl mt-3">Where Family, Friends, and Flavor Meet</p>
            <div className="w-full max-w-[1400px] h-fit landscape-sm:w-1/2 pt-6">
                <Image
                    src={placeholder}
                    alt='placeholder'
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
