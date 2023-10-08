import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://blog.uifront.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1
    },
    {
      url: 'https://blog.uifront.com/artigos',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8
    }
    /* {
      url: 'https://blog.uifront.com/sobre-mim',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    }, */
  ]
}
