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
    images: string[]
    description: string
    tags: string[]
  }

  export const projectsData: projectType[] = [
    {
      name: 'Graphic Lab',
      repo: 'https://github.com/parasmahla1/graphic-lab',
      url: 'https://graphic-lab.vercel.app/',
      images: ['/graphiclab-1.png', '/graphiclab-2.png'],
      description:
        'Graphic Lab helps you to create visually appealing designs on a collabortive canvas.',
      tags: ['nextJS','react', 'typescript', 'shadcn', 'convex', 'clerk', 'tailwindcss', 'liveblocks']
    },
    {
      name: 'Flow Engine',
      repo: 'https://github.com/parasmahla1/flow-engine',
      url: 'https://flow-engine-client.vercel.app/',
      images: ['/flow-engine-1.png', '/flow-engine-2.png'],
      description:
        'FlowEngine is a real-time data pipeline visualizer. It lets a user build a Directed Acyclic Graph (DAG) of source, transformer, and sink nodes on a React Flow canvas, execute the graph through a Fastify backend, and watch data chunks move through the pipeline over Socket.io.',
      tags: ['react', 'typescript', 'Next.js', 'PostgreSQL', 'Redis', 'Socket.io']
    },
    {
      name: 'Wealth Flow',
      repo: 'https://github.com/parasmahla1/Finance-Tracker',
      url: 'https://finance-tracker-vwuc.vercel.app/',
      images: ['/wealth-flow-1.png', '/wealth-flow-2.png'],
      description:
        'Wealth Flow is a modern financial management platform for tracking expenses and budgets',
      tags: ['nextJS','react', 'javascript', 'shadcn', 'postgresql', 'clerk', 'tailwindcss', 'gemini']
    },
    {
      name: 'URL Shortener',
      repo: 'https://github.com/parasmahla1/url-shortener',
      url: 'https://url-shortener-ten-kappa.vercel.app/',
      images: ['/url-shortener-1.png', '/url-shortener-2.png'],
      description:
        'A simple URL shortener application built using Next.js and MongoDB.',
      tags: ['react', 'typescript', 'Next.js', 'tailwindcss', 'MongoDB', 'DaisyUI']
    },
    {
      name: 'Chat App',
      repo: 'https://github.com/parasmahla1/chat-app',
      url: 'https://chat-app-4dxw.onrender.com',
      images: ['/chat-app.png'],
      description:
        'Chat App is a real-time chat application where you can chat with your friends.',
      tags: ['react', 'javascript', 'socket.io', 'tailwindcss', 'MongoDB', 'DaisyUI']
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
