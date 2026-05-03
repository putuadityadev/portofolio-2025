import AboutSection from "@/components/About";
import Cases from "@/components/Cases";
import Certifications from "@/components/Certifications";
import Hero from "@/components/Hero";
import HomeExperience from "@/components/HomeExperience";
import ThoughtsSection from "@/components/Thoughts";


export default function Home() {
  
  return (
   <main className="min-h-dvh pt-[86px]">
      <Hero />
      <Cases />
      <AboutSection />
      <Certifications />
      <HomeExperience />
      <ThoughtsSection />
   </main>
  );
}
