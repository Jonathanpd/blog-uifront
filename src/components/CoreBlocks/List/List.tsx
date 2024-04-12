'use client'

import { FC, useState, useEffect } from 'react'
import { Block } from '@/utils/types/blockTypes'

interface ListProps {
  innerBlocks?: Block[]
}

export const List: FC<ListProps> = ({ innerBlocks = [] }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <ul className="list-disc my-5">
      {isClient &&
        innerBlocks.map((item, index) => {
          return (
            <li
              key={index}
              dangerouslySetInnerHTML={{ __html: item.innerHTML }}
              className={`font-list max-w-5xl mx-auto my-1 text-base leading-8`}
            />
          )
        })}
    </ul>
  )
}
