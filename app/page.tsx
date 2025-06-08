'use client'

import HeroText from "@/components/HeroText";
import Button from "@/components/ui/Button";
import SubHeadline from "@/components/ui/SubHeadline";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
   <main className="min-h-dvh pt-[86px]">
    <section className="mt-16 text-center flex flex-col items-center justify-center gap-16">
      <div className="flex flex-col items-center justify-center gap-5">
        <HeroText />
        <SubHeadline>
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
   </main>
  );
}
