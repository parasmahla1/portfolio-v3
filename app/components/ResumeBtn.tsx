'use client'

import { FileText } from 'lucide-react'

export const ResumeBtn = () => {
  const resumeLink = 'https://drive.google.com/file/d/1o0NB5u4N2K-SBUo72qmzUK-GhXB9JMEw/view?usp=drive_link' 

  return (
    <a
      href={resumeLink}
      target="_blank"
      rel="noopener noreferrer"
      className="relative flex items-center border px-4 py-4 text-lg transition before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-full before:origin-top-left before:scale-0 before:bg-target before:px-8 before:py-4 before:text-textLight before:opacity-0 before:transition before:content-['Resume'] hover:border-target hover:before:scale-100 hover:before:opacity-100"
    >
      <FileText className="sm:hidden" />{' '}
      <span className="ml-4 border-l pl-4 sm:m-0 sm:border-0 sm:p-0">
        Resume
      </span>
    </a>
  )
}
