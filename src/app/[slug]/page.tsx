import { getItem } from '@/services/get-items'
import Link from 'next/link'

export default async function Page({
    params: { slug },
  }: {
    params: { slug: string }
  }) {
    const { post } = await getItem(slug)

    return (
        <>
            <div>My Post: {post.slug}</div>
            <div className='mb-4'>Info: {post.title}</div>
            <Link href={'/'}>
                Voltar
            </Link>
        </>
    )
  }

type Posts = {
    slug: string;
    title: string;
}

export async function generateStaticParams() {
    const posts = await fetch('http://apiuifront.local/json/api/article').then((res) => res.json())
    
    return posts.map((post: Posts) => ({
        slug: String(post.slug),
        title: post.title,
    }))
}