import { Heading } from '../CoreBlocks/Heading'
import { Paragraph } from '../CoreBlocks/Paragraph'
import { Quote } from '../CoreBlocks/Quote'
import { ImageWP } from '../CoreBlocks/ImageWP'
import { List } from '../CoreBlocks/List'

import { FC } from 'react'
import { BlockRendererProps } from '@/utils/types/blockTypes'

export const BlockRenderer: FC<BlockRendererProps> = ({ blocks }) => {
  return blocks?.map((block) => {
    const textAlign =
      typeof block.attrs?.textAlign === 'string'
        ? block.attrs.textAlign
        : undefined
    const align =
      typeof block.attrs?.align === 'string' ? block.attrs.align : undefined
    const width =
      typeof block.attrs?.width === 'number' ? block.attrs.width : undefined
    const height =
      typeof block.attrs?.height === 'number' ? block.attrs.height : undefined

    switch (block.blockName) {
      case 'core/heading':
        return (
          <Heading
            key={block.id}
            content={block.textContent}
            textAlign={textAlign}
            level={block.level}
          />
        )
      case 'core/paragraph':
        //console.log(block)
        return (
          <Paragraph
            key={block.id}
            content={block.innerHTML}
            textAlign={align}
          />
        )
      case 'core/quote':
        return (
          <Quote key={block.id} content={block.textContent} textAlign={align} />
        )
      case 'core/image':
        return (
          <ImageWP
            key={block.id}
            src={block.src}
            width={width}
            height={height}
            alt={block.alt}
          />
        )
      case 'core/list':
        return <List key={block.id} innerBlocks={block.innerBlocks} />
      default:
        return null
    }
  })
}
