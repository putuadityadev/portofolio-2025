import Paragraph from "@/components/ui/Paragraph"

interface OutcomeCardProps {
    children : string
}
export default function OutcomeCard({children}: OutcomeCardProps) {

    return (
        <div className="flex p-6 items-center rounded-full bg-cardBg border-[0.5px] border-paragraphBlack w-full max-w-[274px] text-center">
            <Paragraph>
                {children}
            </Paragraph>
        </div>
    )
}