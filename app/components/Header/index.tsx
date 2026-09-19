import { MotionHeader } from '@/app/lib/motion'

import { Logo } from './Logo'
import { MobileMenu } from './MobileMenu'
import { NavBar } from './NavBar'
import { ThemeSwitcher } from './ThemeSwitcher'

export const Header = () => {
  return (
    <MotionHeader
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="fixed z-30 w-full bg-primary/90 px-6 backdrop-blur-md sm:px-4"
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between border-b">
        <Logo />
        <div className="flex items-center gap-8 sm:hidden">
          <NavBar />
          <ThemeSwitcher />
        </div>
        <MobileMenu />
      </div>
    </MotionHeader>
  )
}
