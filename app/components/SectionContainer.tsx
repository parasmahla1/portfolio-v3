import { ReactNode } from 'react'

import { MotionDiv } from '../lib/motion'

type Props = {
  id: string
  eyebrow: string
  title: string
  children: ReactNode
}

export const SectionContainer = ({ id, eyebrow, title, children }: Props) => {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-28 py-28 sm:py-20">
      <MotionDiv
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12 flex items-end justify-between gap-6 border-t pt-4 sm:mb-8 sm:block"
      >
        <div className="mono-label text-target">{eyebrow}</div>
        <h2 className="display-type text-6xl sm:mt-4 sm:text-5xl">{title}</h2>
      </MotionDiv>
      {children}
    </section>
  )
}
