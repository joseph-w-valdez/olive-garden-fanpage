import Link from "next/link"
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import links from "../data/links"

interface NavbarProps {
    handleMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleMenuToggle }) => {
    return (
        <nav className='w-full bg-[#F4BE69] h-12 flex justify-center items-center fixed top-0 z-10'>
            <Link href="/" className='text-black lora w-3/4 text-center pl-16 md:text-xl lg:text-start lg:pl-10'>
                <span className="mr-2">Garden Delights</span>
                <Image className="inline" src="/assets/images/icon.png" width='25' height='25' alt="icon" />
            </Link>
            <div className="lugra hidden lg:w-1/2 lg:flex lg:justify-evenly">
                {links.map((link, index) => (
                    <Link href={link.href} key={index}><span>{link.name}</span></Link>
                ))}
            </div>
            <RxHamburgerMenu className="ml-8 border border-black text-xl p-1 rounded-md lg:hidden" onClick={handleMenuToggle} />
        </nav>
    )
}

export default Navbar
