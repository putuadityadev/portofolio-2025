'use client'

import Button from "@/components/ui/Button";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Heading2 from "@/components/ui/Heading2";
import { Projects } from "@/utils/projectData";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import SideCard from "./(section)/SideCard";
import TextWrapper from "./(section)/TextWrapper";
import Paragraph from "@/components/ui/Paragraph";
import ProccesList from "./(section)/ProccesList";
import OutcomeCard from "./(section)/OutcomeCard";
import KeyLearningCard from "./(section)/KeyLearningCard";
import ToolsFrameWorkCard from "./(section)/ToolsFrameworkCard";


export default function CaseDetail() {
    const router = useRouter();
    const handleBack = () => {
        router.back();
    }

    const params = useParams();
    
    const caseData = Projects[Number(params.slug) - 1];

    
    
    return (
        <main className="min-h-dvh pt-[86px]">
            <Button variants="back" onClick={handleBack}>
                Back
            </Button>
            <article className="mt-13 md:mt-16">
                <Heading2 className="text-center">
                    {caseData.title}
                </Heading2>
                <div>
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

                {/* Overview */}
                <section className="flex flex-col gap-12 md:flex-row">
                    <div className="flex flex-col gap-4 md:order-2 w-full">
                        <SideCard
                            industry={caseData.detail.industry}
                            role={caseData.detail.my_role}
                            platforms={caseData.detail.project_type}
                            timeline={`${caseData.detail.timeline.start} - ${caseData.detail.timeline.end}`}
                        />
                        <Button
                            variants="detail"
                        >
                            View Live
                        </Button>
                    </div>
                     {/* Text */}
                    <div className="flex flex-col gap-8 md:max-w-[453px]">
                        <TextWrapper 
                            heading="Project Overview"
                            paragraph={caseData.detail.project_overview}
                        />
                        <TextWrapper 
                            heading="Problem Statement"
                            paragraph={caseData.detail.problem_statement}
                        />
                    </div>
                </section>

                {/* Solutions */}
                <section className="mt-12 flex flex-col gap-6 md:gap-8">
                    <div className="flex flex-col gap-4.5">
                        <Heading2>
                            My Path To Solve The Problem
                        </Heading2>
                        <Paragraph>
                            The entire process I undertake to crafting solutions that solve the problems.
                        </Paragraph>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {caseData.detail.process.map((step) => (
                            <ProccesList 
                                key={step.id}
                                proccesTitle={step.name}
                                detailProcces={step.detail}
                                number={step.id}
                            />
                        ))}
                    </div>
                </section>

                {/* Outcome */}
                <section className="mt-12 flex flex-col gap-6 md:gap-8">
                    <Heading2>
                        Outcome
                    </Heading2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:flex-wrap md:justify-start md:gap-6">
                        {caseData.detail.outcome.map((outcome) => (
                            <OutcomeCard key={outcome}>{outcome}</OutcomeCard>
                        ))}
                    </div>
                </section>


                {/* Key Learning */}
                <section className="mt-12 flex flex-col gap-6 md:gap-8">
                    <Heading2>
                        Key Learning
                    </Heading2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:flex-wrap md:justify-start md:gap-6">
                        {caseData.detail.key_learning.map((key, i) => (
                            <KeyLearningCard key={i} name={key.name} description={key.description} />
                        ))}
                    </div>
                </section>

                {/* TechStack */}
                <section className="mt-12 flex flex-col gap-6 md:gap-8">
                    <Heading2>
                        Tools and Framework
                    </Heading2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-y-8 md:gap-x-[60px]">
                        {caseData.detail.tools_framework.map((tool) => (
                            <ToolsFrameWorkCard key={tool.name} name={tool.name} image={tool.image}/>
                        ))}
                    </div>
                </section>
               
                
            </article>  
        </main>
    )
}
