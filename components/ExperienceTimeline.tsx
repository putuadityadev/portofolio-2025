'use client'

import { Timeline } from "./ui/timeline";
import { experienceData } from "@/utils/data";
import Heading2 from "./ui/Heading2";
import Paragraph from "./ui/Paragraph";
import Tag from "./ui/Tag";

interface ExperienceContent {
    role: string;
    company: string;
    period: string;
    description: string;
    achievements: string[];
    technologies: string[];
}

interface ExperienceItem {
    title: string;
    content: ExperienceContent;
}

export default function ExperienceTimeline() {
    const timelineData = experienceData.map((item: ExperienceItem) => ({
        title: item.title,
        content: (
            <div className="bg-white rounded-3xl border-[0.5px] border-paragraphBlack p-6 md:p-8 mb-8">
                <div className="flex flex-col gap-4">
                    {/* Header */}
                    <div className="flex flex-col gap-2">
                        <Heading2 className="!text-xl md:!text-2xl">
                            {item.content.role}
                        </Heading2>
                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-3">
                            <span className="font-poppins text-base font-semibold text-paragraphBlack">
                                {item.content.company}
                            </span>
                            <span className="font-poppins text-sm text-paragraphWhite italic">
                                {item.content.period}
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <Paragraph className="!text-sm md:!text-base">
                        {item.content.description}
                    </Paragraph>

                    {/* Achievements */}
                    <div className="flex flex-col gap-3">
                        <span className="font-poppins text-sm font-semibold text-paragraphBlack">
                            Key Achievements:
                        </span>
                        <ul className="list-disc list-inside space-y-1">
                            {item.content.achievements.map((achievement, index) => (
                                <li key={index} className="font-poppins text-sm text-paragraphWhite">
                                    {achievement}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-col gap-3">
                        <span className="font-poppins text-sm font-semibold text-paragraphBlack">
                            Technologies Used:
                        </span>
                        <div className="flex flex-wrap gap-2">
                            {item.content.technologies.map((tech, index) => (
                                <Tag key={index}>
                                    {tech}
                                </Tag>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }));

    return (
        <div className="w-full">
            <Timeline data={timelineData} />
        </div>
    );
}