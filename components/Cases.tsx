import { Projects } from "@/utils/projectData";
import Card from "./ui/Card";
import SubHeadline from "./ui/SubHeadline";
import Button from "./ui/Button";
import Link from "next/link";

export default function Cases() {
    return (
        <section className="w-full min-h-dvh flex gap-12 flex-col justify-start items-center mt-32">
            <SubHeadline>
                Real Case
            </SubHeadline>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 auto-rows-auto">
                {Projects.map((project) => (
                    <Card 
                        key={project.id}
                        id={project.id}
                        title={project.title}
                        description={project.description}
                        images={project.images}
                        tags={project.tags}
                        role={project.detail.my_role}
                        isHome = {true}
                    />
                ))}
            </div>
            <Button
                variants="detail"
                className="hidden md:flex -mt-4"
            >
                <Link href={`/case`}>
                    View All Cases
                </Link>
            </Button>
        </section>
    )
}