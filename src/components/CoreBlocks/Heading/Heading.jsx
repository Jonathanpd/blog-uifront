import { getFontSizeForHeading, getTextAlign } from '@/utils/fonts'

export const Heading = ({
  textAlign = 'left',
  content = '',
  level = 2,
  className = ''
}) => {
  const TagName = `h${level}`

  return (
    <TagName
      dangerouslySetInnerHTML={{ __html: content }}
      className={`font-heading text-gray-900 font-bold my-5 mb-2 ${getFontSizeForHeading(
        level
      )} ${getTextAlign(textAlign)} ${className}`}
    />
  )
}
