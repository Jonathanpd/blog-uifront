import Hero from "@/components/Hero";
import BlogSection, { BlogCard, BlogGrid, BlogTips } from "@/components/BlogSection";

export default async function Home() {

  return (
    <main className="home flex flex-col justify-center items-center">
      <Hero />

      <BlogGrid />

      <BlogSection />

      <BlogTips />
    </main>
  )
}