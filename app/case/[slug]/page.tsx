'use client'

import Button from "@/components/ui/Button";
import { motion } from "framer-motion";
import Heading2 from "@/components/ui/Heading2";
import { Projects } from "@/utils/projectData";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import SideCard from "./(section)/SideCard";
import TextWrapper from "./(section)/TextWrapper";
import Paragraph from "@/components/ui/Paragraph";
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

    const rowsBy2 = [];
    for (let i = 0; i < caseData.detail.process.length; i += 2) {
        rowsBy2.push(caseData.detail.process.slice(i, i + 2));
    }

    const rowsBy3 = [];
    for (let i = 0; i < caseData.detail.process.length; i += 3) {
        rowsBy3.push(caseData.detail.process.slice(i, i + 3));
    }

    const renderRoadmap = (rows: any[], columns: number, displayClass: string) => {
        return (
            <div className={`${displayClass} flex-col w-full relative pt-4 pb-10 gap-6 lg:gap-10`}>
                {rows.map((row, rowIndex) => {
                    const isFullRow = row.length > 1;

                    const centerOffset = 100 / (columns * 2);
                    const itemStep = 100 / columns;

                    let horizStyle = {};
                    if (isFullRow) {
                        const rightPos = 100 - (centerOffset + (row.length - 1) * itemStep);
                        horizStyle = { left: `${centerOffset}%`, right: `${rightPos}%` };
                    }

                    return (
                        <div key={rowIndex} className="flex w-full relative flex-row justify-start">
                            {/* Horizontal Line */}
                            {isFullRow && (
                                <div className="absolute top-1/2 h-[2px] border-t-[2px] border-dashed border-paragraphBlack/30 -z-10" style={horizStyle} />
                            )}

                            {row.map((step: any) => {
                                return (
                                    <div key={step.id} className="px-4 py-6 relative flex justify-center" style={{ width: `${itemStep}%` }}>
                                        {/* Dot */}
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-secondary border-[4px] border-cardBg z-10" />
                                        
                                        {/* Card */}
                                        <motion.div 
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            className="group w-full flex flex-col gap-3 p-5 xl:p-6 rounded-[24px] bg-cardBg border-[0.5px] border-paragraphBlack/20 transition-all duration-300 hover:border-paragraphBlack/40 hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-secondary/5 relative z-20"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-secondary/30 text-primary flex items-center justify-center shrink-0 font-nohemi text-sm font-medium">
                                                    {step.id}
                                                </div>
                                                <h4 className="text-lg xl:text-xl font-nohemi font-medium text-primary leading-[110%]">{step.name}</h4>
                                            </div>
                                            <ul className="flex flex-col gap-1.5 xl:gap-2 mt-1">
                                                {step.detail.map((detailText: string, i: number) => (
                                                    <li key={i} className="flex gap-2.5 items-start">
                                                        <div className="w-1.5 h-1.5 mt-1.5 rounded-full bg-paragraphBlack/40 shrink-0" />
                                                        <p className="text-paragraphWhite font-poppins leading-[140%] text-[13px] xl:text-sm">
                                                            {detailText}
                                                        </p>
                                                    </li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }

    return (
        <main className="min-h-dvh pt-[86px]">
            <Button variants="back" onClick={handleBack}>
                Back
            </Button>
            <article className="mt-13 md:mt-16">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center justify-center gap-4 mb-10"
                >
                    <Heading2 className="text-center max-w-[900px] leading-[110%] md:leading-[110%] md:text-[3.5rem]">
                        {caseData.title}
                    </Heading2>
                    <div className="flex gap-3 items-center mt-2 flex-wrap justify-center">
                        {caseData.tags.map((tag) => (
                            <span key={tag} className="px-4 py-1.5 rounded-full border border-paragraphBlack/20 text-sm text-paragraphWhite bg-cardBg/50 backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>
                
                {/* Hero Gallery Grid */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16 md:mb-24"
                >
                    {/* Primary Large Image */}
                    <div className="md:col-span-8 rounded-[32px] overflow-hidden relative aspect-square md:aspect-auto bg-cardBg border border-paragraphBlack/10 group h-[400px] md:h-[600px]">
                        <Image 
                            src={`/images/${caseData.images.primary}`}
                            alt={`${caseData.title} Primary View`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                    </div>
                    {/* Extra Images Column */}
                    <div className="md:col-span-4 flex flex-col gap-4">
                        <div className="rounded-[32px] overflow-hidden relative flex-1 bg-cardBg border border-paragraphBlack/10 group min-h-[250px] md:min-h-[292px]">
                            {caseData.images.extra_1 !== '/' ? (
                                <Image 
                                    src={`/images/${caseData.images.extra_1}`}
                                    alt={`${caseData.title} Detail 1`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-transparent">
                                    <span className="text-primary/40 font-medium font-nohemi tracking-widest text-xs uppercase">Detail Shot 1</span>
                                </div>
                            )}
                        </div>
                        <div className="rounded-[32px] overflow-hidden relative flex-1 bg-cardBg border border-paragraphBlack/10 group min-h-[250px] md:min-h-[292px]">
                            {caseData.images.extra_2 !== '/' ? (
                                <Image 
                                    src={`/images/${caseData.images.extra_2}`}
                                    alt={`${caseData.title} Detail 2`}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-tl from-secondary/20 to-transparent">
                                    <span className="text-secondary/60 font-medium font-nohemi tracking-widest text-xs uppercase">Detail Shot 2</span>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>

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
                            onClick={() => window.open(`${caseData.link.live}`, '_blank')}
                        >
                            View Live
                        </Button>
                    </div>
                     {/* Text */}
                    <div className="flex flex-col gap-8 md:max-w-[63%]">
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
                <section className="mt-20 md:mt-32 flex flex-col w-full overflow-hidden">
                    <div className="flex flex-col gap-4.5 px-0">
                        <Heading2>
                            My Path To Solve The Problem
                        </Heading2>
                        <Paragraph>
                            The entire process I undertake to crafting solutions that solve the problems.
                        </Paragraph>
                    </div>
                    
                    <div className="w-full mt-4 md:mt-12 -mx-4 md:mx-0">
                        {/* 3-Column Roadmap (Desktop) */}
                        {renderRoadmap(rowsBy3, 3, "hidden lg:flex")}

                        {/* 2-Column Roadmap (Tablet) */}
                        {renderRoadmap(rowsBy2, 2, "hidden md:flex lg:hidden")}

                        {/* Mobile View */}
                        <div className="flex md:hidden flex-col relative pt-4 ml-4">
                            {/* Continuous Vertical Line */}
                            <div className="absolute top-8 bottom-8 left-[11px] w-[2px] border-l-[2px] border-dashed border-paragraphBlack/30 -z-10" />
                            
                            {caseData.detail.process.map((step) => (
                                <motion.div 
                                    key={step.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative pl-10 py-6"
                                >
                                    {/* Dot */}
                                    <div className="absolute top-[50px] left-[4px] w-4 h-4 rounded-full bg-secondary border-[4px] border-cardBg z-10" />
                                    
                                    <div className="flex flex-col gap-4 p-5 rounded-[24px] bg-cardBg border-[0.5px] border-paragraphBlack/20 transition-all duration-300 hover:bg-white hover:-translate-y-1">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-secondary/30 text-primary flex items-center justify-center shrink-0 font-nohemi text-sm font-medium">
                                                {step.id}
                                            </div>
                                            <h4 className="text-lg font-nohemi font-medium text-primary leading-[110%]">{step.name}</h4>
                                        </div>
                                        <ul className="flex flex-col gap-2">
                                            {step.detail.map((detailText, j) => (
                                                <li key={j} className="flex gap-2 items-start">
                                                    <div className="w-1 h-1 mt-2 rounded-full bg-paragraphBlack/40 shrink-0" />
                                                    <p className="text-paragraphWhite font-poppins leading-[150%] text-sm">
                                                        {detailText}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Outcome */}
                <section className="mt-20 md:mt-32 flex flex-col gap-8 w-full">
                    <Heading2>
                        Outcome & Results
                    </Heading2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                        {caseData.detail.outcome.map((outcome, i) => (
                            <OutcomeCard key={outcome} index={i}>{outcome}</OutcomeCard>
                        ))}
                    </div>
                </section>

                {/* Key Learning */}
                <section className="mt-20 md:mt-32 flex flex-col gap-8 w-full">
                    <Heading2>
                        Key Learnings
                    </Heading2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        {caseData.detail.key_learning.map((key, i) => (
                            <KeyLearningCard key={i} index={i} name={key.name} description={key.description} />
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
