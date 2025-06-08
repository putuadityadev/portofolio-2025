'use client'
import Image from "next/image";
import { motion } from 'motion/react'
import { useState } from 'react';

export default function Avatar() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="w-[69px] h-[107px] rounded-full bg-secondary overflow-hidden hover:cursor-grab relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.h1 
                className="text-2xl tracking-[100%] leading-[100%] absolute top-0 left-1/2 transform -translate-x-1/2 z-10"
                initial={{ y: -40, x:-4, opacity: 0 }}
                animate={{
                    y: isHovered ? 10 : -40,
                    opacity: isHovered ? 1 : 0,
                }}
            >
                👋
            </motion.h1>

            <motion.div
                animate={{
                    y: isHovered ? 24 : 0,
                    transition: { 
                        type: "spring",
                        stiffness: 300,
                        damping: 10,
                        duration: 0.3
                    }
                }}
                whileTap={{ scale: 0.95 }}
            >
                <Image 
                    alt="avatar-image"
                    src={'/images/avatar-image.png'}
                    width={68.476}
                    height={122}
                    className="aspect-[68.48/122.00]"
                />
            </motion.div>
        </div>
    )
}