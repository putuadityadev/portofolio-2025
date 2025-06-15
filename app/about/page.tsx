import AboutSection from "@/components/About";
import { whatICanDo } from "@/utils/data";
import KeyLearningCard from "../case/[slug]/(section)/KeyLearningCard";
import SubHeadline from "@/components/ui/SubHeadline";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function About() {
    return (
        <main className="min-h-dvh pt-[12px]">
            <AboutSection />

            <section className="w-full mt-32 flex flex-col justify-start items-center gap-12 md:gap-16">
                <SubHeadline>
                    What Can I Do
                </SubHeadline>
                <div className="flex flex-col gap-3">
                    {whatICanDo.map((skill) => (
                        <KeyLearningCard 
                            name={skill.name}
                            description={skill.description}
                            key={skill.name}
                        />
                    ))}
                </div>
            </section>

            <section className="w-full mt-32 flex flex-col justify-start items-center gap-12 md:gap-16">
                <SubHeadline>
                    My Path of Experience
                </SubHeadline>
                <ExperienceTimeline />
            </section>
        </main>
    )
}