import { ArrowDownRight, ArrowUpRight, Circle } from 'lucide-react'

import { MotionDiv, MotionH1, MotionP } from '../lib/motion'
import { EmailBtn } from './EmailBtn'
import { ResumeBtn } from './ResumeBtn'

export const Hero = () => {
  return (
    <section id="home" className="hero-surface mx-auto max-w-6xl scroll-mt-28 pt-36 sm:pt-28">
      <div className="grid min-h-[calc(100vh-9rem)] grid-cols-[1fr_250px] content-center gap-12 pb-16 md:grid-cols-1 md:gap-10 sm:min-h-0 sm:pb-12">
        <div>
          <MotionDiv
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mono-label mb-7 flex items-center gap-3"
          >
            <span className="h-2 w-2 rounded-full bg-target shadow-[0_0_0_5px_rgb(var(--color-target)/.16)]" />
            Available for select projects · 2026
          </MotionDiv>
          <MotionH1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="display-type max-w-4xl text-[clamp(4.5rem,12vw,10.8rem)]"
          >
            SYSTEMS
            <br />
            <span className="text-target">WITH A</span>
            <br />
            PULSE.
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 max-w-xl text-xl leading-relaxed sm:mt-7 sm:text-lg"
          >
            I&apos;m Paras -- a full-stack developer making complex ideas clear,
            capable, and genuinely satisfying to use.
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.62 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <EmailBtn />
            <ResumeBtn />
          </MotionDiv>
        </div>

        <MotionDiv
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-col justify-between border-l pl-7 md:flex-row md:items-end md:border-l-0 md:border-t md:pt-5 md:pl-0"
        >
          <div className="space-y-5">
            <div className="mono-label text-target">/ current signal</div>
            <p className="text-lg leading-snug">Designing interfaces that feel as good as the systems behind them.</p>
            <div className="mono-label flex items-center gap-2 opacity-60"><Circle size={8} fill="currentColor" /> Based in India </div>
          </div>
          <a href="#projects" className="group mt-10 flex items-center gap-3 self-start text-sm font-semibold md:mt-0">
            Scroll to work <ArrowDownRight size={20} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
          </a>
        </MotionDiv>
      </div>
      <div className="rule flex items-center justify-between py-4 opacity-60">
        <span className="mono-label">01 / 06</span>
        <span className="mono-label flex items-center gap-2">Scroll to explore <ArrowUpRight size={14} /></span>
      </div>
    </section>
  )
}
