import { link } from "fs";
import Link from "next/link"
import { FaTimes } from 'react-icons/fa';
import links from "../data/links";

interface SidebarProps {
    handleMenuToggle: () => void;
    isOpen: boolean
}

const Sidebar: React.FC<SidebarProps> = ({ handleMenuToggle, isOpen }) => {
    return (
        <div className={`w-full h-screen bg-white fixed z-20 fixed top-0 transition-transform duration-300 ease-in opacity-[95%] ${isOpen ? '' : 'transform translate-x-full'}`}>
            <FaTimes className="fixed top-0 right-0 mt-4 mr-4 text-2xl border border-black p-1 z-10" onClick={handleMenuToggle} />
            <div className="mt-4 ml-4 fixed flex flex-col w-full">
                {links.map((link, index) => (
                    <div key={index} className="w-full">
                        <Link href={link.href} key={index} onClick={handleMenuToggle}>{link.name}</Link>
                        <hr className="w-full border-t-4 border-black"></hr>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sidebar
