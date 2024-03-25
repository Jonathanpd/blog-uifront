import { v4 as uuid } from 'uuid'

import { Block } from '@/utils/types/blockTypes'

interface BlockJSON {
  innerBlocks?: BlockJSON[]
  block: Block
}

export type BlockProps = {
  id: string
  innerBlocks?: []
  block: Block[]
}

export const cleanAndTransformBlocks = (blocksJSON: BlockJSON[]) => {
  const blocks = JSON.parse(JSON.stringify(blocksJSON))

  const assignIds = (b: BlockProps[]) => {
    b.forEach((block) => {
      block.id = uuid()
      if (block.innerBlocks?.length) {
        assignIds(block.innerBlocks)
      }
    })
  }

  assignIds(blocks)

  return blocks
}
