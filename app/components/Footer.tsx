import { Github, Linkedin } from 'lucide-react'

const LeetCodeIcon = ({ width = 24, height = 24 }: { width?: number; height?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0 .287 3.892 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .685-1.687L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 0 0 0-1.38-1.382z" />
  </svg>
)

const socialData = [
  { label: 'GitHub', link: 'https://github.com/parasmahla1/', icon: <Github size={20} /> },
  { label: 'LinkedIn', link: 'https://www.linkedin.com/in/parasmahla80/', icon: <Linkedin size={20} /> },
  { label: 'LeetCode', link: 'https://leetcode.com/u/parasmahla80/', icon: <LeetCodeIcon width={20} height={20} /> },
]

export const Footer = () => {
  return (
    <footer className="px-6 sm:px-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-t py-7 sm:flex-col sm:items-start sm:gap-6">
        <div>
          <div className="font-bold">Paras<span className="text-target">.</span></div>
          <div className="mono-label mt-2 opacity-55">© 2026 / built with intent</div>
        </div>
        <div className="flex items-center gap-5">
          {socialData.map((social) => (
            <a key={social.label} aria-label={social.label} className="transition hover:-translate-y-1 hover:text-target" target="_blank" href={social.link} rel="noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
