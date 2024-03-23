import { Heading } from '../CoreBlocks/Heading'
import { Paragraph } from '../CoreBlocks/Paragraph'

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
      default:
        return null
    }
  })
}
