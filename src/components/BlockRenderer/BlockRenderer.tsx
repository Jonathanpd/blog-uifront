export const BlockRenderer = ({ blocks }) => {
  console.log(blocks)

  return blocks.map((block) => {
    switch (block.blockName) {
      case block.blockName:
        return (
          <div
            key={block.id}
            id={block.id}
            dangerouslySetInnerHTML={{ __html: block.innerHTML }}
          />
        )
      default:
        return null
    }
  })
}
