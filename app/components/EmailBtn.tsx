'use client'

import { useState } from 'react'
import copy from 'copy-to-clipboard'
import { Check, Copy, Mail } from 'lucide-react'

export const EmailBtn = () => {
  const email = 'parasmahla80@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    copy(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2400)
  }

  return (
    <button
      type="button"
      onClick={handleCopyEmail}
      aria-label={copied ? 'Email copied to clipboard' : 'Copy email address'}
      className="group flex min-h-12 items-center gap-3 border border-text px-4 py-3 text-left text-sm font-semibold transition hover:border-target hover:bg-target hover:text-textLight"
    >
      {copied ? <Check size={17} /> : <Mail size={17} />}
      <span>{copied ? 'Copied to clipboard' : email}</span>
      {!copied && <Copy size={15} className="opacity-50 transition-transform group-hover:translate-x-0.5" />}
    </button>
  )
}
