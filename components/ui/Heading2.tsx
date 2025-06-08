interface Heading2Props {
    children: string,
}

export default function Heading2({children} : Heading2Props ) {
    return (
        <h2 className="text-[1.25rem] md:text-[2rem] font-[500] leading-[100%] tracking-[-0.2px] md:tracking-[0.32px]">
            {children}
        </h2>
    )
}