import Image from "next/image"
import placeholder from "../assets/images/placeholder.jpeg"

export default function Welcome() {
    return (
        <div className="text-center red-hat text-3xl mt-5">
            <h1>Welcome Home!</h1>
            <p className="text-xl mt-3">Where Family, Friends, and Flavor Meet</p>
            <Image src={placeholder} alt='placeholder' className="px-5 mt-5" />
        </div>
    )
}