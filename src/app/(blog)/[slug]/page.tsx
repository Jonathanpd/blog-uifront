import { baseApiUrl, getItem } from '@/services/get-items'
import HeaderSinglePost from './_components/HeaderSinglePost'

export default async function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { post } = await getItem(slug)

  return (
    <article className="flex justify-center">
      <div className="flex flex-col min-h-screen w-[100%] max-w-[1400px] gap-8 p-4">
        <HeaderSinglePost />
        <span>Data: {post.date}</span>
        <h1>Título: {post.title}</h1>
        <div>
          Conteúdo:
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </article>
  )
}

type PostsInfo = {
  slug: string;
}

export async function generateStaticParams() {
  const posts = await fetch(`${baseApiUrl}/article`).then((res) => res.json())
  
  return posts.map((post: PostsInfo) => ({
    slug: String(post.slug),
  }))
}