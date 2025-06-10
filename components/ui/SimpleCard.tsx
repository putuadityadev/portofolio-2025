import Image from "next/image";
import Heading2 from "./Heading2";

interface SimpleCardProps {
    title: string,
    image: string
}

export default function SimpleCard({title, image} : SimpleCardProps) {
    return (
        <div className="flex flex-col justify-center w-full items-center gap-4.5 md:gap-6 md:max-w-[340px]">
            <div className="h-[226px] md:h-[266px] w-full rounded-3xl overflow-hidden bg-red-50 relative border-[0.5px] border-paragraphBlack">
                <Image 
                    alt="card-image"
                    src={`images/${image}`}
                    fill
                    className="object-cover"
                />
            </div>
            <Heading2
                className="text-center md:!text-2xl px-4 md:px-0 md:leading-[110%]"
            >
                {title}
            </Heading2>
        </div>
    )
}