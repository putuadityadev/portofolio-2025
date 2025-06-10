import { certificatesData } from "@/utils/data";
import SimpleCard from "./ui/SimpleCard";
import SubHeadline from "./ui/SubHeadline";

export default function Certifications() {
    return (
        <section className="w-full min-h-dvh mt-32 flex flex-col justify-start items-center gap-12">
            <SubHeadline>
                Certifications and Awwards
            </SubHeadline>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16">
                {certificatesData.map((certificate) => (
                    <SimpleCard 
                        key={certificate.name}
                        title={certificate.name}
                        image={certificate.image}
                    />
                ))}
            </div>
        </section>
    )
}