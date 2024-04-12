'use client'

import { useState, useEffect } from 'react'
import { getTextAlign } from '@/utils/fonts'

export const Paragraph = ({ textAlign = 'left', content = '' }) => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <>
      {isClient && (
        <p
          dangerouslySetInnerHTML={{ __html: content }}
          className={`font-paragraph max-w-5xl mx-auto my-5 text-base leading-8 ${getTextAlign(
            textAlign
          )}`}
        />
      )}
    </>
  )
}
