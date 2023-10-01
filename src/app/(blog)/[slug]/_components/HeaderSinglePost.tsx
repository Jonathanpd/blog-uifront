'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function HeaderSinglePost() {
  const router = useRouter()
 
  return (
    <div className='flex justify-between'>
      <Link href={'/'}>
        Home
      </Link>
      <Button onClick={() => router.back()}>
        Voltar
      </Button>
    </div>
  )
}