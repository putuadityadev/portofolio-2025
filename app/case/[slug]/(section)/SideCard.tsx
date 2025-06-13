import Heading2 from "@/components/ui/Heading2";
import Tag from "@/components/ui/Tag";

interface ContainerTextProps {
    heading: string,
    tag: string
}

function ContainerText({heading, tag}: ContainerTextProps) {
    return (
        <div className="w-full flex flex-col gap-3">
            <Heading2 className="text-start !text-[1.125rem]">
                {heading}
            </Heading2>
            <Tag>
                {tag}
            </Tag>
        </div>
    )
} 

interface SideCardProps {
    industry: string,
    role: string,
    platforms: string,
    timeline: string
}

export default function SideCard({industry, role, platforms, timeline}: SideCardProps) {

    return (
        <aside className="p-6 flex flex-col bg-cardBg rounded-4xl border-[0.5px] border-paragraphBlack justify-center items-center gap-6">
            <ContainerText heading="Industry" tag={industry} />
            <ContainerText heading="My Role" tag={role} />
            <ContainerText heading="Platforms" tag={platforms} />
            <ContainerText heading="Timeline" tag={timeline} />
        </aside>
    )
}