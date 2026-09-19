'use client'

import { ArrowUpRight, FileText } from 'lucide-react'

export const ResumeBtn = () => {
  const resumeLink = 'https://drive.google.com/file/d/1-O6vy3HKD5zCgmgScnA8LapEhvVMb0Nj/view?usp=sharing'

  return (
    <a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex min-h-12 items-center gap-3 border border-text/35 px-4 py-3 text-sm font-semibold transition hover:border-target hover:text-target"
    >
      <FileText size={17} />
      Resume
      <span className="flex h-6 w-6 items-center justify-center border border-target/30 text-target transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
        <ArrowUpRight size={15} strokeWidth={2.25} aria-hidden="true" />
      </span>
    </a>
  )
}
