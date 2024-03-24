import { getTextAlign } from '@/utils/fonts'
import { getSrc } from '@/utils/getSrc'
import Image from 'next/image'

export const ImageWP = ({
  textAlign = 'left',
  src = '',
  alt = '',
  width = 672,
  height = 672
}) => {
  const textAlt = alt || 'Imagem Conteúdo'

  return (
    <Image
      alt={textAlt}
      src={getSrc(src)}
      className={`image-wp overflow-hidden rounded-md object-cover my-5 p-5 ${getTextAlign(
        textAlign
      )}`}
      width={width}
      height={height}
      priority={false}
    />
  )
}
