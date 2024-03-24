import { getTextAlign } from '@/utils/fonts'

export const Quote = ({ textAlign = 'left', content = '' }) => {
  return (
    <blockquote
      dangerouslySetInnerHTML={{ __html: content }}
      className={`font-quote border-l-4 text-base italic leading-8 my-5 p-5 text-indigo-600 max-w-5xl ${getTextAlign(
        textAlign
      )}`}
    />
  )
}
