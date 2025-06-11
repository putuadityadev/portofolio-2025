'use client'

import Button from "@/components/ui/Button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Heading2 from "@/components/ui/Heading2";
import { Projects } from "@/utils/projectData";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CaseDetailProps {
    params: {
        slug: number;
    }
}

export default function CaseDetail({ params }: CaseDetailProps) {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    }
    console.log(params.slug);
    
    const caseData = Projects[params.slug - 1];
    console.log(caseData);
    
    
    return (
        <main className="min-h-dvh pt-[86px]">
            <Button variants="back" onClick={handleBack}>
                Back
            </Button>
            <article className="mt-13 md:mt-16">
                <Heading2 className="text-center">
                    {caseData.title}
                </Heading2>
                <div className="">
                    <ContainerScroll>
                        <Image 
                            src={`/images/${caseData.images.primary}`}
                            alt="project-image"
                            width={1200}
                            height={800}
                            className="object-cover"
                        />
                    </ContainerScroll>
                </div>
            </article>  
        </main>
    )
}