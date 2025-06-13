import Card from "@/components/ui/Card";
import SubHeadline from "@/components/ui/SubHeadline";
import { Projects } from "@/utils/projectData";

export default function Case() {
    return (
        <main className="min-h-dvh pt-[128px]">
            <section className="flex flex-col items-center justify-center w-full gap-12 md:gap-16">
                <SubHeadline>
                    Cases
                </SubHeadline>

                <div className="flex flex-col justify-center items-center gap-6">
                    {Projects.map((project) => (
                        <Card 
                            key={project.id}
                            id={project.id}
                            title={project.title}
                            description={project.description}
                            images={project.images}
                            role={project.detail.my_role}
                            tags={project.tags}
                            isHome={false}
                        />
                    ))}
                </div>

            </section>
        </main>
    )
}