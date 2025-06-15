'use client'

import { useEffect, useState } from 'react';
import Tag from '@/components/ui/Tag';

interface SideCardProps {
    date: string,
    location: string,
    titleContent: string[]
}

export default function SideCard({date, location, titleContent} : SideCardProps) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [activeSection, setActiveSection] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const contentContainer = document.querySelector('[data-content-sections]');
            const sections = document.querySelectorAll('[data-section-id]');
            
            if (!contentContainer || sections.length === 0) return;

            const containerRect = contentContainer.getBoundingClientRect();
            const containerTop = containerRect.top + window.scrollY;
            const containerHeight = containerRect.height;
            const viewportHeight = window.innerHeight;
            const scrollTop = window.scrollY;

            // Calculate progress based on content container
            const scrollStart = containerTop - viewportHeight * 0.3;
            const scrollEnd = containerTop + containerHeight - viewportHeight * 0.7;
            const scrollDistance = scrollEnd - scrollStart;
            const currentScroll = scrollTop - scrollStart;
            
            const progress = Math.max(0, Math.min(100, (currentScroll / scrollDistance) * 100));
            setScrollProgress(progress);

            // Determine active section
            let currentActiveSection = 0;
            sections.forEach((section, index) => {
                const sectionRect = section.getBoundingClientRect();
                const sectionTop = sectionRect.top + window.scrollY;
                
                if (scrollTop + viewportHeight * 0.5 >= sectionTop) {
                    currentActiveSection = index;
                }
            });
            
            setActiveSection(currentActiveSection);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="md:sticky md:top-24 flex flex-row md:flex-col w-full justify-between md:justify-start md:gap-6 px-4 py-6 rounded-3xl bg-cardBg border-[0.5px] border-paragraphBlack md:min-w-3/9 md:h-fit">
            {/* left */}
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                    <h2 className="text-sm md:text-[1.125rem] font-[500] leading-[120%] tracking-[-0.14px]">
                        Date
                    </h2>
                    <Tag>
                        {date}
                    </Tag>
                </div>

                <div className="flex flex-col gap-3">
                    <h2 className="text-sm md:text-[1.125rem] font-[500] leading-[120%] tracking-[-0.14px]">
                        Location
                    </h2>
                    <Tag>
                        {location}
                    </Tag>
                </div>
            </div>

            {/* right */}
            <div className="flex flex-col gap-3 max-w-3/5 md:max-w-full">
                <h2 className="text-sm md:text-[1.125rem] font-[500] leading-[120%] tracking-[-0.14px]">
                    Table of Contents
                </h2>
                <div className="flex gap-5 md:gap-8">
                    <div className="w-1 md:w-1.5 self-stretch bg-paragraphBlack rounded-full md:ml-1 relative">
                        <div 
                            className="w-full bg-primary rounded-full transition-all duration-300 ease-out"
                            style={{ height: `${scrollProgress}%` }}
                        />
                    </div>
                    <ol className="flex flex-col gap-6">
                        {titleContent.map((title, i) => (
                            <li 
                                key={i} 
                                className={`list-decimal text-xs md:text-base font-normal leading-[100%] tracking-[-0.36px] transition-colors duration-300 ${
                                    i <= activeSection ? 'text-primary' : 'text-paragraphWhite'
                                }`}
                            >
                                {title}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    )
}

