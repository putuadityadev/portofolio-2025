import Image from "next/image";

interface ToolsFrameWorkCardProps {
    name: string,
    image: string,
}

export default function ToolsFrameWorkCard({name, image}: ToolsFrameWorkCardProps) {

    return (
        <div className="flex flex-col gap-4 w-fit">
            <div className="w-[160px] h-[266px] relative rounded-3xl overflow-hidden">
                <Image 
                    src={`/images/tools/${image}`}
                    alt="Tools_Image"
                    fill
                    className="object-center"
                />
            </div>
            <h3 className="text-paragraphWhite font-poppins text-base leading-[132%] tracking-[-0.16px] text-center">
                {name}
            </h3>
        </div>
    )
}