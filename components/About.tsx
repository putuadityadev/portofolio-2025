import AvatarCard from "./ui/AvatarCard";
import SubHeadline from "./ui/SubHeadline";

export default function AboutSection() {
    return (
        <div className="w-full min-h-dvh mt-32 flex flex-col justify-start items-center">
            <SubHeadline>
                About Me
            </SubHeadline>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4.5">
                {/* Image */}
                <AvatarCard />
            </div>
        </div>
    )
}