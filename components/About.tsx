import AvatarCard from "./ui/AvatarCard";
import Button from "./ui/Button";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import SubHeadline from "./ui/SubHeadline";

export default function AboutSection() {
    return (
        <section className="w-full mt-32 flex flex-col justify-start items-center gap-12">
            <SubHeadline>
                About Me
            </SubHeadline>
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-4 md:gap-4.5 bg-cardBg p-6 rounded-4xl border-[0.5px] border-paragraphBlack w-full">
                {/* Image */}
                <AvatarCard />
                <div className="flex flex-col gap-4 md:w-[376px]">
                    <div className="p-8 flex flex-col gap-4.5 md:gap-3 bg-white rounded-3xl border-[0.5px] border-paragraphBlack w-full">
                        <Heading2
                            className="md:!text-2xl"
                        >
                            I Putu Aditya Satriawan
                        </Heading2>
                        <Paragraph>
                            Creative Developer
                        </Paragraph>
                    </div>
                    <div className="p-8 flex flex-col gap-4.5 bg-white rounded-3xl border-[0.5px] border-paragraphBlack w-full">
                        <Paragraph>
                            Hi, I’m <span className="font-semibold">Putu Aditya</span>, a developer passionate about crafting seamless digital experiences.
                            <br />
                            <br />
                            I believe that combining creativity and functionality through collaboration can create great solutions that not only look good but also work flawlessly. My goal is to create user-centered apps that make a lasting impact.
                        </Paragraph>
                        <span className="text-xl leading-[100%] tracking-[-0.6px] font-nothing-you-could-do md:mt-2">
                            Aditya
                        </span>
                    </div>
                    <Button
                        variants="detail"
                    >
                        More About Me
                    </Button>
                </div>
            </div>
        </section>
    )
}