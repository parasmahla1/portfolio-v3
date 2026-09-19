import { ArrowUpRight } from 'lucide-react'

import { MotionDiv } from '../lib/motion'
import { EmailBtn } from './EmailBtn'
import { SectionContainer } from './SectionContainer'

export const Contact = () => {
  return (
    <SectionContainer id="contact" eyebrow="05 / start a conversation" title="Have a good problem?">
      <MotionDiv
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-[1fr_auto] items-end gap-10 bg-target p-8 text-textLight md:grid-cols-1 md:items-start sm:p-6"
      >
        <div>
          <p className="max-w-2xl text-4xl font-semibold leading-tight sm:text-3xl">
            Let&apos;s make something useful, memorable, and a little bit unexpected.
          </p>
          <p className="mt-5 max-w-xl text-lg opacity-80">
            I&apos;m open to ambitious products, thoughtful collaborations, and conversations about the web.
          </p>
        </div>
        <div className="[&>button]:border-textLight [&>button]:text-textLight [&>button]:hover:border-textLight [&>button]:hover:bg-textLight [&>button]:hover:text-black">
          <EmailBtn />
        </div>
      </MotionDiv>
      <a href="mailto:parasmahla80@gmail.com" className="group mt-5 flex w-fit items-center gap-2 text-sm font-semibold hover:text-target">
        parasmahla80@gmail.com <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </a>
    </SectionContainer>
  )
}
