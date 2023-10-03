import { baseApiUrl, getItem } from '@/services/get-items'
import NavSinglePost from './_components/NavSinglePost'
import Image from 'next/image'

export default async function Page({
  params: { slug },
}: {
  params: { slug: string }
}) {
  const { post } = await getItem(slug)

  return (
    <article className="flex justify-center mt-16 lg:px-8 max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16 relative">
      <div className="flex flex-col min-h-screen w-[100%] max-w-[1400px] gap-8 p-4">
        <div className="max-w-2xl mx-auto w-full">
          <Image 
            src={post.src}
            className="bg-indigo-500 bg-cover h-64 text-center overflow-hidden"
            alt="Imagem do Post"
            width={1000}
            height={400}
          />

          <div className="flex lg:flex-col gap-4 justify-between items-start pt-4">
            <NavSinglePost />
            <div>
              <span>Data: {post.date}</span>
              <h1>Título: {post.title}</h1>
              <div>
                Conteúdo:
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
              </div>
            </div>
          </div>
        
          <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
            <div className="font-sans">
              <a href="#" className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Election
              </a>, <a href="#" className="text-xs text-indigo-600 uppercase font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Politics
              </a>
              <h1 className="text-gray-900 font-bold text-3xl mb-2">Revenge of the Super Man</h1>
              <p className="text-gray-700 text-xs mt-2">Written By: <a href="#" className="text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                Jonas
              </a></p>
              
              <p className="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              
              <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>
              
              <p className="text-base leading-8 my-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              
              <blockquote className="border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</blockquote>
              
              <p className="text-base leading-8 my-5">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
              
              <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                #Election
              </a>, <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                #people
              </a>, <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                #Election2020
              </a>, <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                #trump
              </a>,<a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
                #Joe
              </a>
              
            </div>
              
          </div>
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