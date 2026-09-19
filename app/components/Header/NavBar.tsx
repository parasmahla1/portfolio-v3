'use client'

import Link from 'next/link'

import { navigationLinks } from '@/app/utils/data'

type Props = { onNavigate?: () => void }

export const NavBar = ({ onNavigate }: Props) => {
  return (
    <nav aria-label="Primary navigation">
      <ul className="flex items-center gap-7 sm:flex-col sm:gap-6">
        {navigationLinks.map((link) => (
          <li key={link.path}>
            <Link
              className="group mono-label relative py-2 transition-colors hover:text-target"
              href={link.path}
              onClick={onNavigate}
            >
              <span className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-target opacity-0 transition-opacity group-hover:opacity-100" />
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
