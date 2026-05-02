'use client'

import { motion } from 'motion/react';

export default function ScrollIndicator() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col items-center gap-3 mt-auto pb-8"
        >
            <div className="w-5 h-9 border-2 border-primary/20 rounded-full flex justify-center p-1.5">
                <motion.div 
                    animate={{ 
                        y: [0, 12, 0],
                        opacity: [1, 0.2, 1]
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    className="w-1 h-1 bg-primary rounded-full"
                />
            </div>
            <p className="text-[10px] font-medium text-primary/40 tracking-[0.2em] uppercase font-poppins">
                Scroll
            </p>
        </motion.div>
    );
}
