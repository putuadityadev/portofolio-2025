'use client'

import Button from "@/components/ui/Button"
import Heading2 from "@/components/ui/Heading2"
import { Blogs } from "@/utils/blogData";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation"
import SideCard from "../(section)/SideCard";
import Paragraph from "@/components/ui/Paragraph";
import ContentSection from "../(section)/ContentSection";


export default function ThoughtDetail() {
    const params = useParams();
    const blog = Blogs[Number(params.slug) - 1];

    interface SectionContent {
        number?: number;
        subheading: string;
        paragraph: string;
        list?: string[];
        takeaway?: string;
    }

    const sectionContent: SectionContent[] = [];
    let paragraphContent: string = "";
    const subHeadingContent: string[] = [];

    blog.content.forEach(item => {
        if(item.type === 'section' && typeof item.content === 'object') {
            sectionContent.push(item.content)
        } else if(item.type === 'paragraph' && typeof item.content === 'string') {
            paragraphContent = (item.content)
        }
    });

    sectionContent.forEach(item => {
        if (typeof item.subheading === 'string') {
            subHeadingContent.push(item.subheading)
        }
    })

    const router = useRouter();
    const handleBack = () => {
        router.back();
    }

    
    
    return (
        <main className="min-h-dvh pt-[128px]">
            <Button variants="back" onClick={handleBack}>
                Back
            </Button>
            <article className="mt-13 md:mt-16 flex flex-col gap-6">
                <Heading2 className="text-center">
                    {blog.title}
                </Heading2>

                <div className="relative w-full h-[280px] md:h-[580px] rounded-3xl overflow-hidden">
                        <Image 
                            src={`/images/blogs/${blog.image}`}
                            alt="project-image"
                            fill
                            className="object-cover"
                        />
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                    <SideCard
                        date={blog.date}
                        location={blog.location}
                        titleContent={subHeadingContent}
                    />

                    <main className="flex flex-col p-6 gap-8 rounded-3xl border-[0.5px] border-paragraphBlack bg-white">
                        <Paragraph>
                            {paragraphContent}
                        </Paragraph>

                        <div data-content-sections className="flex flex-col gap-8">
                            {sectionContent.map((section, i) => (
                                <ContentSection 
                                    key={i}
                                    subheading={section.subheading}
                                    paragraph={section.paragraph}
                                    listItem={section.list}
                                    takeaway={section.takeaway}
                                    number={section.number || (i + 1)}
                                    sectionId={i}
                                />
                            ))}
                        </div>
                        
                    </main>
                </div>
            </article>
        </main>
    )
}