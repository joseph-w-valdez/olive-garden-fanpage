'use client'
import Link from "next/link"
import { FaTimes } from 'react-icons/fa';
import links from "../data/links";
import { useSidebarContext } from "../contexts/sidebarContext";
import { useAuthContext } from "../contexts/AuthContext";

const Sidebar: React.FC = () => {
    const { isOpen, handleMenuToggle } = useSidebarContext()
    const { userData, handleSignOut } = useAuthContext()
    const baseDivClasses = `
        w-full h-screen bg-[#f5ebe0] fixed z-20 top-0 transition-transform duration-300 ease-in text-center bg-contain bg-bottom bg-no-repeat lg:hidden
        ${isOpen ? '' : 'transform translate-x-full'} landscape-sm:bg-none bg-[url(https://clipart-library.com/images/ATbrg8nAc.png)]
    `;

    return (
        <div className={baseDivClasses} >
            <FaTimes className="fixed top-0 right-0 mt-4 mr-4 text-3xl border border-black p-1 z-10 md:text-3xl" onClick={handleMenuToggle} />
            <div className="mt-40 fixed flex flex-col w-full lugra px-8 md:text-xl">
                {links.map((link, index) => (
                    <div key={index} className="w-full mb-10">
                        {userData && link.name === 'Login' ? (
                            <>
                                <Link href={'/login'} key={index} onClick={() => { handleMenuToggle(); handleSignOut(); }}>Log Out</Link>
                                <hr className="w-full mt-3 border-t-2 border-black"></hr>
                            </>
                        ) : (
                            <>
                                <Link href={link.href} key={index} onClick={handleMenuToggle}>{link.name}</Link>
                                <hr className="w-full mt-3 border-t-2 border-black"></hr>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
