import { getItems } from '@/utils/get-items'
import Link from 'next/link';

type Posts = {
  slug: string;
  title: string;
}

export default async function Home() {
  const items = await getItems();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-8 p-24">
      {items.map((post: Posts) => (
        <div key={post.slug}>
          <Link href={`/${post.slug}`}>
            <h1>{post.title}</h1>
            <h2>{post.slug}</h2>
          </Link>
        </div>
      ))}
    </main>
  )
}
