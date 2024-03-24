import { Heading } from '../CoreBlocks/Heading'
import { Paragraph } from '../CoreBlocks/Paragraph'
import { Quote } from '../CoreBlocks/Quote'
import { ImageWP } from '../CoreBlocks/ImageWP'

export const BlockRenderer = ({ blocks }) => {
  //console.log(blocks)

  return blocks.map((block) => {
    switch (block.blockName) {
      case 'core/heading':
        return (
          <Heading
            key={block.id}
            content={block.textContent}
            textAlign={block.attrs.textAlign}
            level={block.level}
          />
        )
      case 'core/paragraph':
        return (
          <Paragraph
            key={block.id}
            content={block.textContent}
            textAlign={block.attrs.align}
          />
        )
      case 'core/quote':
        return (
          <Quote
            key={block.id}
            content={block.textContent}
            textAlign={block.attrs.align}
          />
        )
      case 'core/image':
        return (
          <ImageWP
            key={block.id}
            src={block.src}
            textAlign={block.attrs.align}
            width={block.attrs.width}
            height={block.attrs.height}
            alt={block.alt}
          />
        )
      default:
        return null
    }
  })
}
