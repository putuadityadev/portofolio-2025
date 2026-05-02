import { Projects } from "@/utils/projectData";
import Card from "./ui/Card";
import SubHeadline from "./ui/SubHeadline";

export default function Cases() {
    return (
        <section className="w-full min-h-dvh flex gap-8 md:gap-10 flex-col justify-center items-center max-w-[900px] mx-auto">
            <SubHeadline>
                My Recent Projects
            </SubHeadline>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 auto-rows-auto">
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
        </section>
    )
}