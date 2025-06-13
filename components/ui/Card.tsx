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
    console.log(id);
    
    return (
        <Link href={`/case/${id}`} className={`flex flex-col pointer-events-none md:pointer-events-auto ${
            (id === 1 || !isHome )
                ? 'md:flex-row md:col-span-2 md:items-end'
                : 'md:flex-col'
            } justify-center items-center p-6 self-stretch gap-8 rounded-4xl bg-cardBg border-[0.5px] border-paragraphBlack h-fit`}>
            {/* Image */}
            <div className={`relative overflow-hidden rounded-3xl md:h-[430px] ${
                (id === 1 || !isHome) 
                    ? 'h-[245px] w-full md:w-1/2'
                    : 'h-[200px] w-full'
            }`}>
                <Image
                    alt="project-image"
                    src={`/images/${images.primary}`}
                    fill
                    className="object-cover object-top scale-110 hover:cursor-pointer hover:scale-100 transition-all duration-300 ease-in-out"
                />
            </div>
            {/* Text */}
            <div className={`flex flex-col items-start ${
                (id === 1 || !isHome)
                    ? 'w-full md:w-1/2'
                    : 'w-full'
            }`}>
                <div className="flex flex-col gap-[18px]">
                    <div className="flex flex-col gap-3.5">
                        <span className="font-poppins text-sm md:text-base italic text-paragraphWhite leading-[100%]">{role}</span>
                        <Heading2>
                            {title}
                        </Heading2>
                    </div>
                    <Paragraph className={`${(id !== 1 && isHome) && 'md:hidden'}`}>
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
                        className={`${isHome && 'md:hidden'}`}
                    >
                        <Link href={`/case/${id}`}>
                            Read More
                        </Link>
                    </Button>
                </div>
            </div>
        </Link>
    )
}