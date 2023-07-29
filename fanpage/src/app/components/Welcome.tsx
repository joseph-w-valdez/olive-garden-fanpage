import Image from "next/image"
import placeholder from "../assets/images/vin.jpeg"

export default function Welcome() {
    return (
        <section className="text-center red-hat text-3xl mt-5">
            <h1>Welcome Home!</h1>
            <p className="text-xl mt-3">Where Family, Friends, and Flavor Meet</p>
            <Image src={placeholder} alt='placeholder' className="px-5 mt-5 lg:w-3/4 lg:h-3/4 lg:mx-auto" />
        </section>
    )
}