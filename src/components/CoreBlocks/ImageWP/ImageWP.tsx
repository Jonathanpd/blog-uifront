import { getSrc } from '@/utils/getSrc'
import Image from 'next/image'

export const ImageWP = ({
  src = '',
  alt = '',
  width = 672,
  height = 672
}: {
  src?: string
  alt?: string
  width?: number | undefined
  height?: number | undefined
}) => {
  const textAlt = alt || 'Imagem Conteúdo'
  return (
    <div
      className="overflow-hidden flex max-h-[400px] my-5"
      style={{ maxWidth: `${width}px`, height: `${height}px` }}
    >
      <Image
        alt={textAlt}
        src={getSrc(src)}
        className={`image-wp rounded-md object-cover w-full h-auto`}
        width={0}
        height={0}
        sizes="100vw"
        loading="lazy"
      />
    </div>
  )
}
