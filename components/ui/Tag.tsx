interface TagProps {
    children: string,
}

export default function Tag({children} : TagProps) {
    return (
        <div className="w-fit bg-white p-3 rounded-full flex items-center justify-center border-[0.5px] border-paragraphBlack text-xs md:text-sm leading-[100%] tracking-[-0.36px] md:tracking-[-0.52px] text-paragraphWhite">
            {children}
        </div>
    )
}