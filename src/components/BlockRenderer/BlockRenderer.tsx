import { Heading } from '../CoreBlocks/Heading'
import { Paragraph } from '../CoreBlocks/Paragraph'
import { Quote } from '../CoreBlocks/Quote'

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
      default:
        return null
    }
  })
}
