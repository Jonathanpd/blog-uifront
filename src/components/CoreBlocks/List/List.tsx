import { FC } from 'react'
import { Block } from '@/utils/types/blockTypes'

interface ListProps {
  innerBlocks?: Block[]
  block: Block
}

export const List: FC<ListProps> = ({ innerBlocks = [], block }) => {
  return (
    <ul className="list-disc my-5">
      {innerBlocks.map((item, index) => {
        return (
          <li
            key={index}
            dangerouslySetInnerHTML={{ __html: block.listItems[index] }}
            className={`font-list max-w-5xl mx-auto my-1 text-base leading-8`}
          />
        )
      })}
    </ul>
  )
}
