'use client'
import Link from "next/link"
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import links from "../data/links"
import { useSidebarContext } from "../contexts/sidebarContext";

const Navbar: React.FC = () => {
    const { handleMenuToggle } = useSidebarContext()

    return (
        <nav className='w-full bg-[#F4BE69] h-12 flex justify-center items-center fixed top-0 z-10'>
            <Link href="/" className='text-black lora w-3/4 text-center pl-16 text-lg 375:text-xl lg:text-start lg:pl-10'>
                <span className="mr-2">Garden Delights</span>
                <Image className="inline w-[30px] h-[30px] 375:w-[35px] 375:h-[35px]" src="/assets/images/icon.png" width='0' height='0' sizes='100vw' alt="icon" />
            </Link>
            <div className="lugra hidden lg:w-1/2 lg:flex lg:justify-evenly">
                {links.map((link, index) => (
                    <Link href={link.href} key={index}><span>{link.name}</span></Link>
                ))}
            </div>
            <RxHamburgerMenu className="ml-8 border border-black text-3xl p-1 rounded-md lg:hidden" onClick={handleMenuToggle} />
        </nav>
    )
}

export default Navbar
