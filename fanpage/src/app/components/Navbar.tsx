'use client'
import Link from "next/link"
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import links from "../data/links"
import { useSidebarContext } from "../contexts/sidebarContext";
import { useAuthContext } from "../contexts/AuthContext";

const Navbar: React.FC = () => {
    const { handleMenuToggle } = useSidebarContext()
    const { userData, handleSignOut } = useAuthContext()

    return (
        <nav className='w-full bg-[#F4BE69] h-12 flex justify-center lg:justify-between items-center fixed top-0 z-10 lg:px-5'>
            <Link href="/" className='text-black lora text-center text-lg 375:text-xl lg:text-start'>
                <span className="mr-2">Garden Delights</span>
                <Image className="inline w-[30px] h-[30px] 375:w-[35px] 375:h-[35px]" src="/assets/images/icon.png" width='0' height='0' sizes='100vw' alt="icon" />
            </Link>
            <div className="lugra hidden lg:w-1/2 lg:flex lg:justify-end lg:gap-x-4">
                {links.map((link, index) => (
                    <div key={index}>
                        {userData && link.name === 'Login' ? (
                            <Link href='/favoriteDishes'>Favorites</Link>
                        ) : (
                            <Link href={link.href}>{link.name}</Link>
                        )}
                    </div>
                ))}
                {userData ? (
                    <div onClick={handleSignOut} className='cursor-pointer'>Log Out</div>
                ) : (
                    ''
                )}
            </div>
            <RxHamburgerMenu className="absolute right-0 mr-4 border border-black text-3xl rounded-md lg:hidden" onClick={handleMenuToggle} />
        </nav>
    )
}

export default Navbar
