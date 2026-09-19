import Link from 'next/link'

export const Logo = () => {
  return (
    <Link href="#home" className="group flex items-center gap-3" aria-label="Paras Mahla, home">
      <span className="flex h-8 w-8 items-center justify-center bg-target text-sm font-bold text-textLight transition-transform group-hover:rotate-12">P</span>
      <span className="text-xl font-bold tracking-tight">Paras<span className="text-target">.</span></span>
    </Link>
  )
}
