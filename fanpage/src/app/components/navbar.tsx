import Link from "next/link"
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";

interface NavbarProps {
    handleMenuToggle: () => void;
}


const Navbar: React.FC<NavbarProps> = ({ handleMenuToggle }) => {
    return (
        <nav className='w-full bg-[#F4BE69] h-12 flex justify-center items-center fixed'>
            <Link href="/" className='text-black lora w-3/4 text-center pl-16'>Garden Delights <Image className="inline" src="/assets/images/icon.png" width='20' height='20' alt="icon" /></Link>
            <RxHamburgerMenu className="ml-8 border border-black text-2xl p-1 rounded-md" onClick={handleMenuToggle} />
            {/* <Link href="/roulette" className='text-black'>dinner spinner</Link> */}
        </nav>
    )
}

export default Navbar