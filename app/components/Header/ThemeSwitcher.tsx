'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MoonStar, Sun } from 'lucide-react'

export const ThemeSwitcher = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className="h-8 w-8" aria-hidden="true" />

  const isDark = resolvedTheme === 'dark'

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="flex h-8 w-8 items-center justify-center border transition hover:border-target hover:text-target"
    >
      {isDark ? <Sun size={15} /> : <MoonStar size={15} />}
    </button>
  )
}
