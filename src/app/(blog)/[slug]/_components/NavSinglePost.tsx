'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function NavSinglePost() {
  const router = useRouter()

  return (
    <div className="flex gap-4 items-center">
      <Button onClick={() => router.back()}>Voltar</Button>
      <Link href={'/'}>Ir para Home</Link>
    </div>
  )
}
