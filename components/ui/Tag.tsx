interface TagProps {
    children: string,
}

export default function Tag({children} : TagProps) {
    return (
        <div className="w-fit bg-white px-3 py-1.5 md:px-4 md:py-2 rounded-full flex items-center justify-center border-[0.5px] border-paragraphBlack/30 text-[10px] md:text-xs leading-[100%] tracking-tight text-paragraphWhite font-medium">
            {children}
        </div>
    )
}