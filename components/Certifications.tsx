"use client";

import { certificatesData } from "@/utils/data";
import SubHeadline from "./ui/SubHeadline";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Certifications() {
    return (
        <section className="w-full mt-32 flex flex-col justify-start items-center gap-12 section-container overflow-hidden py-10 max-w-[900px]">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <SubHeadline>
                    Certifications & Awards
                </SubHeadline>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full auto-rows-[300px] md:auto-rows-[380px]">
                {certificatesData.map((certificate, i) => (
                    <motion.div 
                        key={certificate.name + i}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                        className={`group relative overflow-hidden rounded-3xl border-[0.5px] border-paragraphBlack/20 cursor-pointer ${
                            i === 0 || i === 3 ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                        }`}
                    >
                        {/* Overlay gradient on hover */}
                        <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        <Image 
                            alt={certificate.name}
                            src={`/images${certificate.image}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Text Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            <div className="flex flex-col gap-2 md:gap-3">
                                <span className="text-secondary text-xs md:text-sm font-medium tracking-wider uppercase">
                                    {certificate.type}
                                </span>
                                <h3 className="text-white font-nohemi text-xl  lg:text-2xl font-medium leading-[110%]">
                                    {certificate.name}
                                </h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}