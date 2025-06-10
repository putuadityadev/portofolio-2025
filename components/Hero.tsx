'use client'

import HeroText from "@/components/ui/HeroText";
import Button from "@/components/ui/Button";
import SubHeadline from "@/components/ui/SubHeadline";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    return (
        <section className="mt-16 text-center flex flex-col items-center justify-center gap-16">
            <div className="flex flex-col items-center justify-center gap-5">
                <HeroText />
                <SubHeadline
                    className="w-[232px] md:w-full"
                >
                Hi I am Aditya! Currently working as @Freelancer.
                </SubHeadline>
            </div>
            <Button
                variants="primary"
                onClick={() => router.push('/case')}
            >
                Explore My Works
            </Button>
        </section>
    )
}