import Image from "next/image";
import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";
import Tag from "./Tag";
import Button from "./Button";
import Link from "next/link";

interface CardProps {
    id: number,
    title: string,
    description: string,
    images: {
        primary: string;
        extra_1: string;
        extra_2: string;
    };
    tags: string[],
    role: string,
    isHome?: boolean
}

export default function Card({id, title, description, images, tags, role, isHome} : CardProps) {
    
    return (
        <Link href={`/case/${id}`} className={`flex flex-col group pointer-events-auto ${
            (id === 1 || !isHome )
                ? 'md:flex-row md:col-span-2 md:items-center'
                : 'md:flex-col'
            } justify-center items-center p-4 md:p-5 self-stretch gap-6 md:gap-8 rounded-[32px] border-[0.5px] border-paragraphBlack hover:border-primary/20 hover:bg-white transition-all duration-500 ease-in-out h-fit`}>
            {/* Image */}
            <div className={`relative overflow-hidden rounded-2xl md:h-[320px] ${
                (id === 1 || !isHome) 
                    ? 'h-[200px] w-full md:w-1/2'
                    : 'h-[160px] w-full'
            }`}>
                <Image
                    alt="project-image"
                    src={`/images/${images.primary}`}
                    fill
                    className="object-fit object-center scale-110 hover:cursor-pointer hover:scale-100 transition-all duration-300 ease-in-out"
                />
            </div>
            {/* Text */}
            <div className={`flex flex-col items-start ${
                (id === 1 || !isHome)
                    ? 'w-full md:w-1/2'
                    : 'w-full'
            }`}>
                <div className={`flex flex-col gap-4 ${!isHome && 'pr-8'}`}>
                    <div className="flex flex-col gap-2.5">
                        <span className="font-poppins text-xs md:text-sm italic text-paragraphWhite/80 leading-[100%] uppercase tracking-wider">{role}</span>
                        <Heading2 className="text-lg md:text-xl lg:text-2xl group-hover:text-primary transition-colors duration-300">
                            {title}
                        </Heading2>
                    </div>
                    <Paragraph className={`line-clamp-2 text-xs md:text-sm`}>
                        {description}
                    </Paragraph>
                    <div className="flex flex-wrap items-center gap-2">
                       {tags.map((tag, i) => (
                        <Tag key={i}>
                            {tag}
                        </Tag>
                       ))}
                    </div>
                    <Button
                        variants="detail"
                        // className={`${id !== 1 && 'md:hidden'}`}
                    >
                        Read More
                    </Button>
                </div>
            </div>
        </Link>
    )
}