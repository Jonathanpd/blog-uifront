import { ChevronRightIcon } from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button';
import { getItems } from '@/services/get-items'
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type Posts = {
  id: number;
  slug: string;
  title: string;
  date: string;
  content: string;
}

export default async function Home() {
  const items = await getItems();

  return (
    <main className="flex justify-center">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 min-h-screen max-w-[1400px] flex-col items-center justify-center gap-8 p-4">
        {items.map((post: Posts) => (
          <article>
            <Card className="flex flex-col w-[100%] max-w-[400px] lg:min-w-[300px]" key={post.slug}>
              <CardHeader>
                <Link href={`/${post.slug}`}>
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>{post.slug}</CardDescription>
                </Link>
              </CardHeader>
              <CardContent>
                <p>{post.slug}</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" asChild>
                  <Link href={`/${post.slug}`}>
                    Ver Post <ChevronRightIcon className="h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </article>
        ))}
      </div>
    </main>
  )
}
