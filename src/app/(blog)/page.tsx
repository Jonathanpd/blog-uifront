import Hero from "@/components/Hero";
import { BlogGrid } from "@/components/BlogSection";

export default async function Home() {

  return (
    <main className="home flex flex-col justify-center items-center">
      <Hero />

      <BlogGrid maxPost={5} />
    </main>
  )
}