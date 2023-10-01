import { cache } from 'react'

const revalidateNumber = 60 // Revalidate every 60 seconds

export const getItems = cache(async () => { // Feed Posts
  const items = await fetch(`http://apiuifront.local/json/api/article/`, {
    next: { revalidate: revalidateNumber },
  }).then((res) => res.json())
  return items
})

export const getItem = cache(async (slug: string) => { // Single Post
  const item = await fetch(`http://apiuifront.local/json/api/article/${slug}`, {
    next: { revalidate: revalidateNumber },
  }).then((res) => res.json())
  return item
})