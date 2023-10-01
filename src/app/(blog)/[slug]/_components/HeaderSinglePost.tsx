'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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