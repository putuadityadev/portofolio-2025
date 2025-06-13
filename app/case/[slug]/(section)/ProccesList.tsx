interface ProccesListProps {
    proccesTitle : string;
    detailProcces : string[];
    number : number;
}


export default function ProccesList({proccesTitle, detailProcces, number} : ProccesListProps) {

    return (
        <div className="flex flex-col p-6 rounded-4xl gap-6 bg-cardBg border-[0.5px] border-paragraphBlack">
            <h1 className="text-[1.125rem] leading-[120%] font-[500] tracking-[-0.18px]">
                {number}. {proccesTitle}
            </h1>
            <ol className="flex flex-col gap-3">
               {detailProcces.map((step, i) => (
                    <li key={i} className={`font-poppins font-normal leading-[132%] tracking-[-0.16px] text-paragraphWhite/80 border-b-[0.5px] border-paragraphBlack pb-3 ${i === detailProcces.length - 1 && 'border-none'}`}>
                        {step}
                    </li>
               ))}
            </ol>
        </div>
    )
}

