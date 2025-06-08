'use client'

import { navLinks } from "@/utils/data"
import Button from "./ui/Button"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Navbar() {
    const currentPage = usePathname()
    const [ navActive, setNavActive ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (navActive && window.innerWidth < 768) {
                setNavActive(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [navActive]);
    
    

    return (
        <header className="fixed top-0 left-0 right-0 w-full bg-white z-50 section-container">
            <nav className="flex relative md:items-center justify-between py-4 bg-white border-b-[0.5px] border-paragraphBlack/20">
                <Link href={'/'}>
                    <h2 className="font-poppins text-xl font-semibold">
                        Putu Aditya
                    </h2>
                </Link>
                <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 absolute md:static right-0 top-2">
                    <div className="flex flex-col md:flex-row w-full md:items-center gap-2 md:gap-4 order-2 md:order-1 z-10">
                        {navLinks.map((item) => (
                            <Link 
                                key={item.name}
                                href={item.link}
                                className={`text-sm ${ currentPage === item.link && 'font-semibold'} px-5 py-2 md:px-2 md:py-0 md:bg-transparent hover:bg-secondary rounded-full border-paragraphBlack/40 md:border-none border bg-cardBg transition-all duration-300 ease-in-out ${navActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <Button
                        variants="menu"
                        className="order-1 md:order-2"
                        onClick={() => setNavActive(!navActive)}
                        isActive={navActive}
                    >
                        {navActive ? 'Close' : 'Menu'}
                    </Button>
                </div>
            </nav>
        </header>
    )
}