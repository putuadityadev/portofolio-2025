'use client'

import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variants: keyof typeof buttonVariants;
    className?: string;
    menuIcon?: string;
    hoverIcon?: string;
    onClick? : () => void;
    isActive? : boolean;
}

const buttonVariants: Record <string, string> = {
    primary: 'flex justify-center items-center px-8 py-[18px] rounded-full border-[1px] border-primary font-nohemi text-sm md:text-xl font-normal leading-[100%] tracking-[0.025rem] hover:text-white hover:bg-primary hover:cursor-pointer transition-colors duration-300 ease-[cubic-bezier(0.85, 0, 0.15, 1)]',
    menu: 'flex justify-center items-center px-8 py-3 rounded-full text-sm text-white leading-[100%] bg-primary gap-2 hover:bg-secondary hover:text-primary hover:cursor-pointer font-semibold transition-all duration-300 ease-in-out',
    detail:'w-full flex items-center justify-between pl-8 pr-2 py-2 bg-secondary rounded-full text-sm font-semibold border border-[0.5px] border-paragraphWhite/30 hover:bg-primary hover:text-secondary hover:cursor-pointer transition-all duration-300 ease-in-out',
}

function easeOutElastic(x: number): number {
    const c4 = (2 * Math.PI) / 3;
    return x === 0
        ? 0
        : x === 1
        ? 1
        : Math.pow(2, -10 * x) * Math.sin((x * 10 - 0.75) * c4) + 1;
}
const motionVariants: Variants = {
    initial: {
        scale: 1,
    },
    tap: {
        scale: 0.95,
        transition: {
            type: 'tween',
            ease: easeOutElastic,
            duration: 0
        }
    }
}

export default function Button ({children, variants, className, menuIcon, hoverIcon, onClick, isActive}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <motion.button
            className={`${buttonVariants[variants]} !${className}`}
            variants={motionVariants}
            initial="initial"
            whileTap="tap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >

            {variants === 'menu' ? ( 
                <div className='relative flex items-center justify-center w-full h-full overflow-hidden'>
                    {/* Container Normal State */}
                    <motion.div 
                        className='flex items-center justify-center gap-2'
                        animate={{
                            opacity: isHovered ? 0 : 1,
                            x: isHovered ? 50 : 0
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 25,
                            duration: 0.6
                        }}
                    >
                        <div className='relative flex justify-center w-[18px] h-[18px]'>
                            <Image 
                                alt="menu-icon"
                                src={menuIcon || isActive ? "/icons/close.svg" : "/icons/menu.svg"}
                                width={isActive ? 12 : 18}
                                height={isActive ? 12 : 18}
                            />
                        </div>
                        <div>
                            {children}
                        </div>
                    </motion.div>
                    
                    {/* Container Arrow for Hover */}
                    <motion.div 
                        className='absolute inset-0 flex items-center justify-center'
                        initial={{ opacity: 0, x: -30 }}
                        animate={{
                            opacity: isHovered ? 1 : 0,
                            x: isHovered ? 0 : -30
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 25,
                            duration: 0.6,
                            delay: isHovered ? 0.1 : 0
                        }}
                    >
                        <Image 
                            alt="hover-icon"
                            src={hoverIcon || "/icons/left-arrow.svg"}
                            width={18}
                            height={18}
                            className={`${isActive ? 'rotate-90 md:rotate-180' : 'rotate-270 md:rotate-0'}`}
                        />
                    </motion.div>
                </div>
            ) : (
                <div>
                    {children}
                </div>
            )}


            {variants === 'detail' && 
                <div className="relative w-[34px] h-[34px]">
                    <Image
                        alt="Explore works icon"
                        src="/icons/arrow_right_primary.svg"
                        width={34}
                        height={34}
                        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                            isHovered ? 'opacity-0' : 'opacity-100'
                        }`}
                    />
                    <Image
                        alt="Explore works icon"
                        src="/icons/arrow_right_secondary.svg"
                        width={34}
                        height={34}
                        className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                            isHovered ? 'opacity-100' : 'opacity-0'
                        }`}
                    />
                </div>
            }
        </motion.button>
    );
}