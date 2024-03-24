export const List = ({ innerBlocks = [], block }) => {
  return (
    <ul className="list-disc my-5">
      {innerBlocks.map((item, index) => {
        return (
          <li
            key={item.innerContent}
            id={item.innerContent}
            dangerouslySetInnerHTML={{ __html: block.listItems[index] }}
            className={`font-list max-w-5xl mx-auto my-1 text-base leading-8`}
          />
        )
      })}
    </ul>
  )
}
