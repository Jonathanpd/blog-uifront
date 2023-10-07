import Hero from '@/components/Sections/Hero'
import { BlogGrid } from '@/components/Sections/BlogSection/BlogSection'

export default async function Home() {
  return (
    <main className="home flex flex-col justify-center items-center">
      <Hero />

      <BlogGrid maxPost={5} />
    </main>
  )
}
