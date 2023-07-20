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
        <div className={`w-full h-screen bg-white fixed z-10 transition-transform duration-300 ease-in ${isOpen ? '' : 'transform translate-x-full'}`}>
            <FaTimes className="fixed top-0 right-0 mt-4 mr-4 text-2xl border border-black p-1" onClick={handleMenuToggle} />
            <div className="mt-4 ml-4 fixed flex flex-col">
                {links.map((link, index) => (
                    <Link href={link.href} key={index} onClick={handleMenuToggle}>{link.name}</Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar