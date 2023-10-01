import { cache } from 'react'
 
export const getItem = cache(async (slug: string) => {
  const item = await fetch(`http://apiuifront.local/json/api/article/${slug}`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  }).then((res) => res.json())
  return item
})