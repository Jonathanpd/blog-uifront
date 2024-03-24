'use client'

import Logo from '@/components/Logo'
import Link from 'next/link'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Blog', href: '/artigos' },
  { name: 'Tutoriais', href: '#' },
  { name: 'Sobre mim', href: 'https://www.linkedin.com/in/jonathanpd/' }
]

type HeaderProps = {
  className?: string
}

export default function Header({ className }: HeaderProps) {
  const combinedClassName = `absolute inset-x-0 top-0 z-50 max-w-[1400px] mx-auto px-4 ${className}`

  return (
    <header className={combinedClassName}>
      <nav
        className="flex items-center justify-between px-4 py-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Blog: UI & Front</span>
            <Logo />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Abrir Menu</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Entrar <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
