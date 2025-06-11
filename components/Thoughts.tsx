import { Blogs } from "@/utils/blogData";
import BlogCard from "./ui/BlogCard";
import SubHeadline from "./ui/SubHeadline";
import Button from "./ui/Button";

export default function ThoughtsSection() {

    const getRandomBlogs = () => {
        const shuffled = [...Blogs].sort(
            () => 0.5 - Math.random()
        );
        return shuffled.slice(0, 3);
    }

    const randomBlogs = getRandomBlogs();
    return(
        <section  className="w-full flex gap-12 flex-col justify-start items-center mt-32">
            <SubHeadline>
                My Thoughts
            </SubHeadline>
            <div className="flex flex-col p-6 border-[0.5px] border-paragraphBlack rounded-4xl bg-cardBg gap-8">
                <div className="flex flex-col md:grid md:grid-cols-3 justify-center items-stretch w-full gap-8 ">
                    {randomBlogs.map((blog) => (
                        <BlogCard 
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            image={blog.image}
                            overview={blog.overview}
                            tags={blog.tags}
                        />
                    ))}
                </div>
                <Button
                    variants="detail"
                    className="hidden md:flex"
                >
                    Read More
                </Button>
            </div>
    </section>
    )
}