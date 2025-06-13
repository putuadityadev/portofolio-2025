import Paragraph from "@/components/ui/Paragraph"

interface KeyLearningCardProps {
    name: string
    description: string
}

export default function KeyLearningCard({name, description}: KeyLearningCardProps) {
    return (
        <div className="flex p-6 items-center rounded-3xl bg-primary border-[0.5px] border-paragraphBlack w-full text-white">
            <div className="flex flex-col gap-3">
                <h1 className="font-[500] font-poppins text-base leading-[132%] tracking-[-0.16px]">
                    {name}
                </h1>
                <Paragraph className="text-white/50 md:text-white/70">
                    {description}
                </Paragraph>
            </div>
        </div>
    )
}