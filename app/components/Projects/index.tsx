'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUp } from 'lucide-react'

import { MotionDiv } from '@/app/lib/motion'
import { projectsData } from '@/app/utils/data'

import { ProjectCard } from './ProjectCard'

const projectLayout = [
  'col-span-12',
  'col-span-7 md:col-span-8 sm:col-span-1',
  'col-span-5 pt-24 md:col-span-4 md:pt-16 sm:col-span-1 sm:pt-0',
  'col-span-5 md:col-span-4 sm:col-span-1',
  'col-span-7 pt-20 md:col-span-8 md:pt-12 sm:col-span-1 sm:pt-0',
]

export const Projects = () => {
  const [showAll, setShowAll] = useState(false)
  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 4)

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-28 py-28 sm:py-20">
      <header className="grid grid-cols-12 items-end gap-6 border-t pt-4 sm:grid-cols-1">
        <div className="col-span-3 mono-label text-target sm:col-span-1">03 / selected releases</div>
        <div className="col-span-7 md:col-span-6 sm:col-span-1">
          <h2 className="display-type text-[clamp(3.8rem,8.5vw,7.5rem)]">LOOK<br />CLOSER.</h2>
        </div>
        <p className="col-span-2 pb-1 text-sm leading-relaxed opacity-60 md:col-span-3 sm:col-span-1 sm:max-w-md">
          Every build has more than one view. Switch the active screen to inspect each product from another angle.
        </p>
      </header>

      <div className="mt-14 grid grid-cols-12 gap-x-6 gap-y-20 sm:mt-10 sm:grid-cols-1 sm:gap-y-14">
        {visibleProjects.map((project, index) => (
          <MotionDiv
            key={project.name}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: Math.min(index * 0.08, 0.32), ease: [0.22, 1, 0.36, 1] }}
            className={projectLayout[index]}
          >
            <ProjectCard projectData={project} featured={index === 0} index={index} />
          </MotionDiv>
        ))}
      </div>

      {projectsData.length > 4 && (
        <button
          type="button"
          onClick={() => setShowAll(!showAll)}
          className="group mt-20 flex w-full items-center justify-between border-y py-4 text-left transition-colors hover:text-target"
          aria-expanded={showAll}
        >
          <span className="mono-label">{showAll ? 'Fold the archive' : 'Unfold one more release'}</span>
          {showAll ? <ArrowUp size={18} /> : <ArrowDown size={18} className="transition-transform group-hover:translate-y-1" />}
        </button>
      )}
    </section>
  )
}
