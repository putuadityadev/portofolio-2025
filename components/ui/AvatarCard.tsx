'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { myTechStack } from "@/utils/data";
import { useEffect, useState } from "react";

export default function AvatarCard() {
    const duplicatedTechStack = [...myTechStack, ...myTechStack];
    const [isNotMobile, setIsNotMobile] = useState(false);

    useEffect(() => {
        const checkScreenWidth = () => {
            setIsNotMobile(window.innerWidth > 768);
        };
 
        checkScreenWidth();
        window.addEventListener('resize', checkScreenWidth);
        return () => window.removeEventListener('resize', checkScreenWidth);
    }, []);
    
    // Calculate the width of one complete set
    const itemWidth = isNotMobile ? 32 : 28;
    const gapWidth = isNotMobile ? 32 : 20; // md:gap-8 = 32px, gap-5 = 20px
    const singleSetWidth = myTechStack.length * (itemWidth + gapWidth);
    
    return (
        <div className="relative">
                <Image 
                    alt="avatar-image"
                    src={'/images/card-avatar.svg'}
                    width={ isNotMobile ? 442 : 335}
                    height={ isNotMobile ? 550 : 380}
                    className="object-contain"
                />
            <div className="absolute max-w-[200px] md:max-w-[288px] bottom-2 md:bottom-5 right-4 md:right-6 overflow-hidden">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 w-5 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 w-5 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                
                {/* Scrolling container */}
                <motion.div 
                    className="flex items-center gap-5 md:gap-8"
                    animate={{
                        x: [-singleSetWidth, 0]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop"
                    }}
                >
                    {duplicatedTechStack.map((stack, index) => (
                        <Image 
                            alt={stack.name}
                            src={`/icons/${stack.icon}`}
                            key={`${stack.name}-${index}`}
                            width={isNotMobile ? 32 : 28}
                            height={isNotMobile ? 32 : 28}
                            className="flex-shrink-0 opacity-50 grayscale hover:cursor-pointer hover:opacity-100 hover:grayscale-0 transition-all duration-300 ease-in-out"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}
