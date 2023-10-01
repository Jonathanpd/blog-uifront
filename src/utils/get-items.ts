import { cache } from 'react'
 
export const getItems = cache(async () => {
  const items = await fetch(`http://apiuifront.local/json/api/article/`, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  }).then((res) => res.json())
  return items
})