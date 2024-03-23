import { getTextAlign } from '@/utils/fonts'

export const Paragraph = ({ textAlign = 'left', content = '' }) => {
  return (
    <p
      dangerouslySetInnerHTML={{ __html: content }}
      className={`font-paragraph max-w-5xl mx-auto my-5 text-base leading-8 ${getTextAlign(
        textAlign
      )}`}
    />
  )
}
