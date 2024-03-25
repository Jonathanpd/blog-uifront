export type BlockAttrs = Record<string, string | number | string[]>

export type Block = {
  id: number
  blockName: string | null
  attrs: BlockAttrs
  innerBlocks?: []
  innerHTML: string
  level: number | undefined
  textContent: string
  src: string | undefined
  alt: string | undefined
  listItems: string[]
  innerContent?: string[]
  block: Block[]
}

export type BlockRendererProps = {
  blocks: Block[]
}
