'use client'

import { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeftRight, ArrowUpRight, Code2 } from 'lucide-react'

import { projectType } from '../../utils/data'

type Props = {
  projectData: projectType
  featured?: boolean
  index: number
}

export const ProjectCard = ({ projectData, featured = false, index }: Props) => {
  const [activeScreen, setActiveScreen] = useState(0)
  const hasCompanionScreen = projectData.images.length > 1
  const activeImage = projectData.images[activeScreen]
  const companionImage = projectData.images[activeScreen === 0 ? 1 : 0]

  const toggleScreen = () => {
    if (hasCompanionScreen) setActiveScreen((screen) => (screen === 0 ? 1 : 0))
  }

  return (
    <article className="group">
      <div className={featured ? 'relative aspect-[1.88/1] sm:aspect-[1.32/1]' : 'relative aspect-[1.24/1] sm:aspect-[1.32/1]'}>
        <div className="absolute inset-x-0 top-0 bottom-7 overflow-hidden border border-text/15 bg-secondary">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 1.025 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="absolute inset-0"
            >
              <Image
                src={activeImage}
                alt={projectData.name + ', screen ' + (activeScreen + 1)}
                fill
                sizes={featured ? '(max-width: 670px) 100vw, 90vw' : '(max-width: 670px) 100vw, 58vw'}
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex items-center gap-2 text-white">
            <span className="mono-label bg-black/60 px-2 py-1">0{index + 1}</span>
            <span className="mono-label bg-black/60 px-2 py-1">
              {hasCompanionScreen ? 'screen 0' + (activeScreen + 1) : 'single view'}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100 sm:opacity-100">
            <a
              href={projectData.repo}
              target="_blank"
              rel="noreferrer"
              aria-label={projectData.name + ' source code'}
              className="flex h-10 w-10 items-center justify-center bg-primary text-text transition hover:bg-target hover:text-textLight"
            >
              <Code2 size={18} />
            </a>
            {projectData.url && (
              <a
                href={projectData.url}
                target="_blank"
                rel="noreferrer"
                aria-label={'Open ' + projectData.name + ' live site'}
                className="flex h-10 w-10 items-center justify-center bg-primary text-text transition hover:bg-target hover:text-textLight"
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>
        </div>

        {hasCompanionScreen && companionImage && (
          <button
            type="button"
            onClick={toggleScreen}
            className="absolute bottom-0 right-4 w-[43%] overflow-hidden border-4 border-primary bg-secondary text-left shadow-[10px_10px_0_rgb(var(--color-text)/.14)] transition-transform duration-300 hover:-translate-y-2 focus-visible:-translate-y-2 sm:right-3 sm:w-[48%]"
            aria-label={'Show screen ' + (activeScreen === 0 ? 2 : 1) + ' for ' + projectData.name}
          >
            <div className="relative aspect-[16/9]">
              <Image src={companionImage} alt="" fill sizes="(max-width: 670px) 48vw, 30vw" className="object-cover" />
              <span className="absolute inset-0 grid place-items-center bg-black/25 text-white opacity-0 transition-opacity hover:opacity-100">
                <span className="mono-label flex items-center gap-2 bg-black/70 px-2 py-1"><ArrowLeftRight size={13} /> switch view</span>
              </span>
            </div>
          </button>
        )}
      </div>

      <div className="mt-2 flex items-start justify-between gap-4">
        <div>
          <div className="mono-label text-target">{featured ? 'Lead release / 2026' : 'Release 0' + (index + 1)}</div>
          <h3 className={featured ? 'mt-2 text-4xl font-bold tracking-tight sm:text-3xl' : 'mt-2 text-2xl font-bold tracking-tight sm:text-xl'}>{projectData.name}</h3>
          <p className="mt-2 max-w-2xl text-base leading-relaxed opacity-70">{projectData.description}</p>
        </div>
        <ArrowUpRight size={20} className="mt-5 shrink-0 text-target transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>
      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
        {projectData.tags.slice(0, featured ? 7 : 5).map((tag) => (
          <span key={tag} className="mono-label opacity-60">{tag}</span>
        ))}
      </div>
    </article>
  )
}
