import Paragraph from "@/components/ui/Paragraph";
import Heading2 from "@/components/ui/Heading2";

interface ContentSectionProps {
    number?: number;
    subheading : string;
    paragraph: string;
    listItem?: string[];
    takeaway?: string;
    sectionId?: number;
}

export default function ContentSection({number, subheading, paragraph, listItem, takeaway, sectionId} : ContentSectionProps) {
    return (
        <section className="flex flex-col gap-3" data-section-id={sectionId}>
            <Heading2 className="md:!text-2xl">
                {number}{number && '.'} {subheading}
            </Heading2>
            <div className="flex flex-col gap-3">
                <Paragraph>
                    {paragraph}
                </Paragraph>
                
                {listItem && (
                    <div className="font-poppins text-sm md:text-base leading-[150%] text-paragraphWhite">
                        <ol className="list-disc pl-8">
                            {listItem.map((list, i) => (
                                <li key={i}>
                                    {list}
                                </li>
                            ))}
                        </ol>
                    </div>
                )}
                
                {takeaway && (
                    <Paragraph className="font-semibold">
                        <span>Takeaway: </span>
                        {takeaway}
                    </Paragraph>
                )}
            </div>
        </section>
    )
}