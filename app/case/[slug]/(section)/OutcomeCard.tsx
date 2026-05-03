"use client";

import { motion } from "framer-motion";

interface OutcomeCardProps {
    children : string;
    index: number;
}

export default function OutcomeCard({children, index}: OutcomeCardProps) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
            className="flex flex-col justify-between p-6 md:p-8 h-full rounded-[32px] bg-cardBg border border-paragraphBlack/10 relative overflow-hidden group w-full"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/30 rounded-full blur-3xl -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150" />
            
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-8 shadow-sm relative z-10 border border-paragraphBlack/5">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            
            <p className="text-primary font-poppins text-lg md:text-xl font-medium leading-[140%] relative z-10">
                {children}
            </p>
        </motion.div>
    )
}