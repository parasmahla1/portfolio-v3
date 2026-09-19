import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

import { MotionDiv } from '../lib/motion'
import { SectionContainer } from './SectionContainer'

export const About = () => {
  return (
    <SectionContainer id="about" eyebrow="02 / the person behind the pixels" title="A little context.">
      <div className="grid grid-cols-[1.2fr_.8fr] gap-20 md:grid-cols-1 md:gap-10">
        <MotionDiv
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-3xl leading-tight sm:text-2xl"
        >
          I care about the space between an idea and the moment it becomes useful.
          That means asking better questions, sweating the small interactions, and
          shipping the thing.
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="border-l pl-7 text-lg leading-relaxed opacity-75 md:max-w-xl"
        >
          From real-time canvases to finance tools, I build web products with React,
          Next.js, TypeScript, and whatever else the problem calls for. I like clean
          abstractions, honest interfaces, and teams that enjoy making things well.
          <Link href="#contact" className="group mt-7 flex w-fit items-center gap-2 font-semibold text-target">
            Let&apos;s talk <ArrowUpRight size={18} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </MotionDiv>
      </div>
    </SectionContainer>
  )
}
