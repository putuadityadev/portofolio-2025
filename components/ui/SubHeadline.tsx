interface SubHeadlineProps {
    children: React.ReactNode;
}

export default function SubHeadline({children} : SubHeadlineProps) {
    return (
        <p className="text-sm md:text-base font-normal text-paragraphWhite leading-[124%]">
            {children}
        </p>
    )
}