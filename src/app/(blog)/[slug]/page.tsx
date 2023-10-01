import { baseApiUrl, getItem } from '@/services/get-items'
import HeaderSinglePost from './_components/HeaderSinglePost'

export default async function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { post } = await getItem(slug)

  return (
    <>
      <HeaderSinglePost />
      <div>My Post: {post.slug}</div>
      <div className='mb-4'>Info: {post.title}</div>
    </>
  )
}

type Posts = {
  slug: string;
  title: string;
}

export async function generateStaticParams() {
  const posts = await fetch(`${baseApiUrl}/article`).then((res) => res.json())
  
  return posts.map((post: Posts) => ({
      slug: String(post.slug),
      title: post.title,
  }))
}