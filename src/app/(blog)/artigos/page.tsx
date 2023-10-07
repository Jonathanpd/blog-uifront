import { BlogGrid } from '@/components/Sections/BlogSection/BlogSection'

export default async function Artigos() {
  return (
    <main className="home flex flex-col justify-center items-center mt-28">
      <BlogGrid maxPost={99} />
    </main>
  )
}
