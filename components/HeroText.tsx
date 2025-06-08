import Avatar from "./ui/Avatar"

export default function HeroText() {
    return (
        <div className="font-normal leading-[110%] md:leading-[100%] text-2xl md:text-[2.5rem] tracking-[-0.72px] md:tracking-[-1.2px] flex flex-col justify-center items-center text-center md:gap-2">
            <div className="flex items-end gap-3">
                <h1>Creative</h1>
                    <Avatar />
                <h1>Developer</h1>
            </div>
            <h2>Crafting <span className="font-poppins font-semibold italic">Solution</span> that Solve <span className="font-poppins font-semibold italic">Problem</span></h2>
        </div>
    )
}