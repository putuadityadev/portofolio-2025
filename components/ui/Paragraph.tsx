interface ParagraphProps {
    children: React.ReactNode,
    className?: string,
}

export default function Paragraph({children, className} : ParagraphProps) {
    return (
        <p className={`text-paragraphWhite text-sm md:text-base md:tracking-[0.16px] font-normal leading-[128%] tracking-[0.14px] ${className}`}>
            {children}
        </p>
    )
}