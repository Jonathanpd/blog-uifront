type Posts = {
    slug: string;
    title: string;
}

export async function generateStaticParams() {
    const posts = await fetch('http://apiuifront.local/json/api/article').then((res) => res.json())
    
    return posts.map((post: Posts) => ({
        slug: post.slug,
    }))
}

export default function Page({ params }: { params: { slug: string } }) {
    return <div>My Post: {params.slug}</div>
}