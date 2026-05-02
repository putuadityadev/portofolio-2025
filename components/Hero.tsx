'use client'

import HeroText from "@/components/ui/HeroText";
import Button from "@/components/ui/Button";
import SubHeadline from "@/components/ui/SubHeadline";
import ScrollIndicator from "@/components/ui/ScrollIndicator";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    return (
        <section className="text-center flex flex-col items-center justify-start gap-16 min-h-dvh py-28">
            <div className="flex flex-col items-center justify-center gap-5">
                <HeroText />
                <SubHeadline
                    className="w-[232px] md:w-full"
                >
                Hi I am Aditya! Currently working as Fullstack Developer.
                </SubHeadline>
            </div>
            <Button
                variants="primary"
                onClick={() => router.push('/case')}
            >
                Explore My Works
            </Button>
            <ScrollIndicator />
        </section>
    )
}