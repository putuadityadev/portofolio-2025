interface SubHeadlineProps {
    children: React.ReactNode;
    className?: string;
}

export default function SubHeadline({children, className} : SubHeadlineProps) {
    return (
        <p className={`text-sm md:text-base font-normal text-paragraphWhite leading-[124%] ${className}`}>
            {children}
        </p>
    )
}