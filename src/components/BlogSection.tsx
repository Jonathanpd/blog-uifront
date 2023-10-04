import { getItems } from '@/services/get-items'
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { getSrc } from '@/utils/getSrc';

type Posts = {
    id: number;
    slug: string;
    title: string;
    date: string;
    src: string;
    excerpt: string;
    //content: HTMLElement;
    content: React.ReactNode;
}

type BlogGridProps = {
    maxPost: number;
};

export async function BlogGrid({ maxPost }: BlogGridProps) {
    const items = await getItems();

    return (
        <div className="blog-grid grid sm:grid-cols-2 lg:grid-cols-3 min-h-screen max-w-[1400px] flex-col items-center justify-center gap-8 p-4 z-10">
            <div className="mx-auto lg:mx-0 max-w-sm">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Nossos Artigos</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                    {/* Aprenda como expandir seus projetos com nossos conselhos especializados */}
                    Confira o que há de mais recente sobre elementos de interface, UX / UI Design e desenvolvimento Front-end.
                </p>

                <Button variant='ghost' className="font-semibold shadow-sm hover:bg-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6" asChild>
                    <Link href={`/artigos`}>
                    Ver Todos <ChevronRightIcon className="h-4 w-4" />
                    </Link>
                </Button>
            </div>

            {items.map((post: Posts, index: number) => (
                <article key={post.id} className={(maxPost > 0 && index >= maxPost) ? 'hidden' : ''}>
                    <Card className="h-[432px] flex flex-col justify-between max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-0">
                        <Link className="" href={`/${post.slug}`}>
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

                                <div className="max-h-11 max-w-full overflow-hidden mb-3 font-normal text-gray-700 dark:text-gray-400" >
                                    {post.excerpt}
                                </div>
                            </CardContent>
                        </Link>
                        <CardFooter>
                            <Button className="bg-indigo-600 font-semibold shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" asChild>
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

/*
const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
        id: 2,
        title: 'Boost your conversion rate2',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
          name: 'Michael Foster',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]

export function BlogSection() {
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 border-t pt-10 sm:mt-16 sm:pt-16">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Tutoriais</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                --
                </p>
            </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    <p className="text-gray-600">{post.author.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
}

export function BlogCard() {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    )
}

export function BlogTips() {
    return (
        <div className="mx-auto max-w-7xl px-6 lg:px-8 border-t pt-10 sm:mt-16 sm:pt-16">
            <div className="mx-auto max-w-2xl lg:mx-0">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dicas Rápidas</h2>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                --
                </p>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-gray-200 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <img className="rounded-t-lg" src="https://flowbite.com/docs/images/blog/image-1.jpg" alt="" />
                    </a>
                    <div className="p-5">
                        <a href="#">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
                        </a>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
} */