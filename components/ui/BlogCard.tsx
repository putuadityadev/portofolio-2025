import Image from "next/image";
import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";
import Tag from "./Tag";
import Button from "./Button";

interface BlogCardProps {
    id: number,
    title: string,
    image: string,
    overview: string,
    tags: string[],
    isHome?: boolean
}


export default function BlogCard({id, title, image, overview, tags, isHome} : BlogCardProps) {
    console.log(id);
    return (
        <div className="flex flex-col items-start justify-start gap-8 p-6 rounded-3xl border-[0.5px] border-paragraphBlack bg-white md:h-full md:min-h-[500px]">
            {/* image */}
            <div className="relative h-[171px] w-full flex-shrink-0">
                <Image 
                    alt="blog-image"
                    src={`/images/blogs/${image}`}
                    fill
                    className="object-cover rounded-[18px]"
                />
            </div>

            {/* Text */}
            <div className="flex flex-col w-full gap-6 flex-grow">
                <span className="font-poppins text-sm md:text-base italic text-paragraphWhite leading-[100%]">5 June 2025</span>
                <div className="flex flex-col gap-3 flex-grow">
                    <Heading2
                        className="md:!text-[1.25rem] md:!tracking[-0.2px]"
                    >
                        {title}
                    </Heading2>
                    <Paragraph>
                        {overview}
                    </Paragraph>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((tag, i) => (
                            <Tag key={i}>
                                {tag}
                            </Tag>
                        ))}
                    </div>
                    <div className="mt-auto pt-8">
                        <Button
                            variants="detail"
                            className={`${isHome && 'md:hidden'}`}
                        >
                            Read More
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}