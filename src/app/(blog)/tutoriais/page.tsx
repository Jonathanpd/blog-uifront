import { Paragraph } from '@/components/CoreBlocks/Paragraph'

export default async function Artigos() {
  return (
    <main className="home flex flex-col justify-center items-center mt-28">
      <Paragraph
        content={'(Por enquanto não disponibilizamos nenhum tutorial)'}
      />
      <Paragraph content={'Em breve!!!'} />
    </main>
  )
}
