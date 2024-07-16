export const navigationLinks = [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Projects', path: '#projects' },
    { label: 'Skills', path: '#skills' },
    { label: 'Contact', path: '#contact' }
  ]
  
  export type projectType = {
    name: string
    repo: string
    url: string | false
    image: string
    description: string
    tags: string[]
  }
  
  export const projectsData: projectType[] = [
    {
      name: 'Graphic Lab',
      repo: 'https://github.com/parasmahla1/graphic-lab',
      url: 'https://graphic-lab.vercel.app/',
      image:
        '/graphic-lab.png',
      description:
        'Graphic Lab helps you to create visually appealing designs on a collabortive canvas.',
      tags: ['nextJS','react', 'typescript', 'shadcn', 'convex', 'clerk', 'tailwindcss', 'liveblocks']
    },
    {
      name: 'Chat App',
      repo: 'https://github.com/parasmahla1/chat-app',
      url: 'https://chat-app-4dxw.onrender.com',
      image:
        '/chat-app.png',
      description:
        'Chat App is a real-time chat application where you can chat with your friends.',
      tags: ['react', 'javascript', 'socket.io', 'tailwindcss', 'MongoDB', 'DaisyUI']
    },
    {
      name: 'URL Shortener',
      repo: 'https://github.com/parasmahla1/url-shortener',
      url: 'https://url-shortener-ten-kappa.vercel.app/',
      image:
        '/url-shortener.png',
      description:
        'A simple URL shortener application built using Next.js and MongoDB.',
      tags: ['react', 'typescript', 'Next.js', 'tailwindcss', 'MongoDB', 'DaisyUI']
    },
  ]
  
  export const skillsData = [
    {
      img: 'html5/html5-original.svg',
      name: 'HTML'
    },
    {
      img: 'css3/css3-original.svg',
      name: 'CSS'
    },
    {
      img: 'javascript/javascript-original.svg',
      name: 'JavaScript'
    },
    // {
    //   img: 'sass/sass-original.svg',
    //   name: 'Sass'
    // },
    {
      img: 'typescript/typescript-original.svg',
      name: 'TypeScript'
    },
    {
      img: 'c/c-original.svg',
      name: 'C'
    },
    {
      img: 'cplusplus/cplusplus-original.svg',
      name: 'C++'
    },
    {
      img: 'react/react-original.svg',
      name: 'React'
    },
    {
      img: 'tailwindcss/tailwindcss-original.svg',
      name: 'Tailwindcss'
    },
    {
      img: 'nextjs/nextjs-original.svg',
      name: 'Nextjs'
    },
    {
      img: 'nodejs/nodejs-original.svg',
      name: 'Node.js'
    },
    {
      img: 'express/express-original.svg',
      name: 'Express'
    },
    {
      img: 'solidity/solidity-original.svg',
      name: 'Solidity'
    },
    {
      img: 'hardhat/hardhat-original.svg',
      name: 'Hardhat'
    },
    // {
    //   img: 'postgresql/postgresql-original.svg',
    //   name: 'PostgreSQL'
    // },
    {
      img: 'mongodb/mongodb-original.svg',
      name: 'MongoDB'
    },
    {
      img: 'github/github-original.svg',
      name: 'GitHub'
    },
    {
      name: 'Firebase',
      img: 'firebase/firebase-plain.svg'
    },
    {
      img: 'git/git-original.svg',
      name: 'Git'
    }
  ]
  