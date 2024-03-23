import { baseApiUrl, getItem } from '@/services/get-items'
import NavSinglePost from './_components/NavSinglePost'
import Image from 'next/image'
import { getSrc } from '@/utils/getSrc'
import { BlockRenderer } from '@/components/BlockRenderer'
import { cleanAndTransformBlocks } from '@/utils/cleanAndTransformBlocks'
import { Heading } from '@/components/CoreBlocks/Heading'

export default async function Page({
  params: { slug }
}: {
  params: { slug: string }
}) {
  const { post } = await getItem(slug)

  const content = cleanAndTransformBlocks(post.content)

  return (
    <>
      <article className="flex justify-center mt-16 lg:px-8 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
        <div className="flex flex-col min-h-screen w-[100%] max-w-[1400px] gap-8">
          <div className="font-sans max-w-2xl mx-auto w-full mt-3 leading-normal">
            <Image
              src={getSrc(post.src)}
              className="bg-indigo-500 bg-cover h-64 text-center overflow-hidden rounded-md object-cover"
              alt="Imagem do Post"
              width={1000}
              height={400}
            />

            <div className="flex flex-col gap-4 justify-between items-start pt-4">
              <NavSinglePost />
            </div>

            <Heading
              key={post.id}
              content={post.title}
              textAlign="left"
              level={1}
            />

            <p className="text-gray-700 text-xs mt-2">
              Autor:{' '}
              <a
                href="https://www.linkedin.com/in/jonathanpd/"
                className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                target="_blank"
                rel="noreferrer"
              >
                Jonathan S. S.
              </a>
            </p>

            <BlockRenderer blocks={content} />
          </div>
        </div>
      </article>
      {/*
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="font-sans">
              <a
                href="#"
                className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Election
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                Politics
              </a>
              <h1 className="text-gray-900 font-bold text-3xl mb-2">
                Revenge of the Super Man
              </h1>
              <p className="text-gray-700 text-xs mt-2">
                Written By:{' '}
                <a
                  href="#"
                  className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
                >
                  Jonas
                </a>
              </p>
              
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </blockquote>
              
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Election
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #people
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Election2020
              </a>
              ,{' '}
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #trump
              </a>
              ,
              <a
                href="#"
                className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out"
              >
                #Joe
              </a>
            </div>
          </div>
      */}
    </>
  )
}

type PostsInfo = {
  slug: string
}

export async function generateStaticParams() {
  const posts = await fetch(`${baseApiUrl}/article`).then((res) => res.json())

  return posts.map((post: PostsInfo) => ({
    slug: String(post.slug)
  }))
}
