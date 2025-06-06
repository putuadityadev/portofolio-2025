'use client'

import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import { useState } from 'react';

interface ButtonProps {
    children: React.ReactNode;
    variants: keyof typeof buttonVariants;
    className? : string;
}

const buttonVariants: Record <string, string> = {
    primary: 'flex justify-center items-center px-8 py-[18px] rounded-full border-[1px] border-primary font-nohemi text-xl font-normal leading-[100%] tracking-[0.025rem] hover:text-white hover:bg-primary hover:cursor-pointer transition-colors duration-300 ease-[cubic-bezier(0.85, 0, 0.15, 1)]',
    menu: 'flex justify-center items-center px-8 py-3 rounded-full text-white bg-primary gap-2 hover:bg-secondary hover:text-primary hover:cursor-pointer font-semibold transition-all duration-300 ease-in-out',
    detail:'w-full flex items-center justify-between pl-8 pr-2 py-2 bg-secondary rounded-full font-semibold border border-[0.5px] border-paragraphWhite/30 hover:bg-primary hover:text-secondary hover:cursor-pointer transition-all duration-300 ease-in-out',
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

export default function Button ({children, variants, className}: ButtonProps) {
    const [isHovered, setIsHovered] = useState(false);

    return(
        <motion.button
            className={`${buttonVariants[variants]} !${className}`}
            variants={motionVariants}
            initial="initial"
            whileTap="tap"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {children}
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