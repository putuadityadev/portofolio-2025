"use client";

import { motion } from "framer-motion";

interface KeyLearningCardProps {
    name: string;
    description: string;
    index: number;
}

export default function KeyLearningCard({name, description, index}: KeyLearningCardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            className="flex p-6 md:p-8 flex-col gap-4 rounded-[32px] bg-primary border-[0.5px] border-white/10 w-full text-white relative overflow-hidden group"
        >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="flex items-center gap-4 relative z-10">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md border border-white/5 shrink-0">
                    <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h1 className="font-nohemi font-medium text-xl md:text-2xl leading-[120%] text-white group-hover:text-secondary transition-colors duration-300">
                    {name}
                </h1>
            </div>

            <p className="text-white/70 font-poppins text-sm md:text-base leading-[160%] relative z-10 mt-2">
                {description}
            </p>
        </motion.div>
    )
}