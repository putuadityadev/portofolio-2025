'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { myTechStack } from "@/utils/data";

export default function AvatarCard() {
    // Duplicate array untuk seamless loop
    const duplicatedTechStack = [...myTechStack, ...myTechStack];

    return (
        <div className="relative">
            <Image 
                alt="avatar-image"
                src={'/images/card-avatar.svg'}
                width={305}
                height={380}
                className="object-contain"
            />
            <div className="absolute max-w-[200px] bottom-2 right-4 overflow-hidden">
                {/* Gradient overlays */}
                <div className="absolute left-0 top-0 w-5 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 w-5 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                
                {/* Scrolling container */}
                <motion.div 
                    className="flex items-center gap-5"
                    animate={{
                        x: [0, -((myTechStack.length * 28) + (myTechStack.length * 20))]
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {duplicatedTechStack.map((stack, index) => (
                        <Image 
                            alt={stack.name}
                            src={`/icons/${stack.icon}`}
                            key={`${stack.name}-${index}`}
                            width={28}
                            height={28}
                            className="flex-shrink-0 opacity-50 grayscale hover:cursor-pointer hover:opacity-100 hover:grayscale-0 transition-all duration-300 ease-in-out"
                        />
                    ))}
                </motion.div>
            </div>
        </div>
    )
}