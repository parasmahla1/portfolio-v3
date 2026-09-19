'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { NavBar } from './NavBar'
import { ThemeSwitcher } from './ThemeSwitcher'

export const MobileMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="hidden sm:block">
      <button
        type="button"
        aria-label={open ? 'Close navigation' : 'Open navigation'}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="relative z-50 p-2 hover:text-target"
      >
        {open ? <X /> : <Menu />}
      </button>
      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-start justify-between bg-primary px-6 pb-10 pt-28 sm:px-4">
          <div>
            <div className="mono-label mb-8 text-target">Navigate /</div>
            <NavBar onNavigate={() => setOpen(false)} />
          </div>
          <div className="flex w-full items-center justify-between border-t pt-5">
            <span className="mono-label opacity-60">Paras Mahla · 2026</span>
            <ThemeSwitcher />
          </div>
        </div>
      )}
    </div>
  )
}
