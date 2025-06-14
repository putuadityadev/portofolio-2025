import BlogCard from "@/components/ui/BlogCard";
import SubHeadline from "@/components/ui/SubHeadline";
import { Blogs } from "@/utils/blogData";

export default function Thoughts() {
    return (
        <main className="min-h-dvh pt-[128px]">
            <section className="flex flex-col items-center justify-center w-full gap-12 md:gap-16">
                <SubHeadline>
                    My Thoughts
                </SubHeadline>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-cardBg rounded-4xl border-[0.5px] border-paragraphBlack">
                    {Blogs.map((blog) => (
                        <BlogCard 
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            image={blog.image}
                            overview={blog.overview}
                            tags={blog.tags}
                            isHome={false}
                        />
                    ))}
                </div>
            </section>
        </main>
    )
}