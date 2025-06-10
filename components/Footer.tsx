'use client'

import { myContacts } from "@/utils/data";
import SubHeadline from "./ui/SubHeadline";
import Button from "./ui/Button";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-col items-center gap-12 md:gap-16 mb-6 mt-32">
            <SubHeadline>
                Yay! We hit the finish line. Say 🎉 hello!
            </SubHeadline>

            <div className="flex flex-col items-start gap-3 w-full">
                <span className="leading-[124%]">Have A Problem To Solve?</span>
                <h2 className="text-[8rem] md:text-[10.25rem] font-normal leading-[100%] tracking-[1.28px] text-cardBg">
                    LET’S TALK
                </h2>
            </div>
            <div className="w-full flex flex-wrap gap-3 -mt-8">
                {myContacts.map((contact) => (
                    <Button
                        key={contact.name}
                        variants="primary"
                        onClick={() => window.open(contact.link, '_blank')}
                        className="text-xs"
                    >
                        {contact.name}    
                    </Button>
                ))}
            </div>
            <div className="w-full flex items-center justify-between">
                <h3 className="font-poppins leading-[100%] tracking-[-0.54px]">
                    © 2025 Putu Aditya.
                </h3>
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex justify-center items-center gap-3 hover:cursor-pointer"
                >
                    Back To Top
                    <Image
                        src={'/icons/arrow_right_primary.svg'}
                        width={40}
                        height={40}
                        alt="Arrow pointing up"
                        className="rotate-270"
                    />
                </button>
            </div>
        </footer>
    )
}