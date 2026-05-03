import ExperienceTimeline from "./ExperienceTimeline";
import SubHeadline from "./ui/SubHeadline";

export default function HomeExperience() {
    return (
        <section className="w-full mt-32 flex flex-col justify-start items-center gap-12 md:gap-16 max-w-[900px] mx-auto">
            <SubHeadline>
                My Path of Experience
            </SubHeadline>
            <ExperienceTimeline />
        </section>
    )
}