import Heading2 from "@/components/ui/Heading2";
import Paragraph from "@/components/ui/Paragraph";
interface TextWrapperProps {
    heading: string,
    paragraph: string
}

export default function TextWrapper({heading, paragraph} : TextWrapperProps) {
    return (
        <div className="flex flex-col gap-[18]">
            <Heading2>
                {heading}
            </Heading2>
            <Paragraph>
                {paragraph}
            </Paragraph>
        </div>
    )
}