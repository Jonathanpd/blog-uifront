import { getItems } from '@/services/get-items'
import { ChevronRightIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import Image from 'next/image'
import { getSrc } from '@/utils/getSrc'

type Posts = {
  id: number
  slug: string
  title: string
  date: string
  src: string
  excerpt: string
  //content: HTMLElement;
  content: React.ReactNode
}

type BlogGridProps = {
  maxPost: number
  className?: string
}

export async function BlogGrid({ className, maxPost }: BlogGridProps) {
  const combinedClassName = `blog-grid grid sm:grid-cols-2 lg:grid-cols-3 min-h-screen max-w-[1400px] flex-col items-center justify-center gap-8 p-4 z-10 ${className}`
  const items = await getItems()

  return (
    <div className={combinedClassName}>
      <div className="mx-auto lg:mx-0 max-w-sm">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Nossos Artigos
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          {/* Aprenda como expandir seus projetos com nossos conselhos especializados */}
          Confira o que há de mais interessante sobre elementos de interface, UX
          / UI Design e desenvolvimento Front-end.
        </p>

        <Button
          variant="ghost"
          className="font-semibold shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6"
          asChild
        >
          <Link href={`/artigos`}>
            Ver Todos <ChevronRightIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      {items.map((post: Posts, index: number) => (
        <article
          key={post.id}
          className={maxPost > 0 && index >= maxPost ? 'hidden' : ''}
        >
          <Card className="h-[532px] flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-0">
            <Link href={`/${post.slug}`}>
              <CardHeader className="p-0">
                <Image
                  className="rounded-t-lg h-52 object-cover"
                  src={getSrc(post.src)}
                  alt={post.title}
                  width={500}
                  height={240}
                />
              </CardHeader>
              <CardContent className="py-4 max-w-full">
                <CardTitle className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {post.title}
                </CardTitle>

                <CardDescription className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-gray-500">
                    {post.date}
                  </time>
                  <span className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                    Front-end
                  </span>
                </CardDescription>

                {/* <div 
                                    className="max-h-11 overflow-hidden mb-3 font-normal text-gray-700 dark:text-gray-400" 
                                    dangerouslySetInnerHTML={{ __html: post.content }}
                                /> */}

                <div className="max-h-11 max-w-full overflow-hidden mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {post.excerpt}
                </div>
              </CardContent>
            </Link>
            <CardFooter>
              <Button
                className="bg-indigo-600 font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                asChild
              >
                <Link href={`/${post.slug}`}>
                  Ver Post <ChevronRightIcon className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </article>
      ))}
    </div>
  )
}
