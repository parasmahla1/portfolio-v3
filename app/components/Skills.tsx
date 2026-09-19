import { MotionDiv } from '../lib/motion'
import { skillsData } from '../utils/data'
import { SectionContainer } from './SectionContainer'

const groups = [
  { label: 'Interface', names: ['React', 'Nextjs', 'TypeScript', 'JavaScript', 'Tailwindcss', 'HTML', 'CSS'] },
  { label: 'Systems', names: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Firebase', 'Socket.io'] },
  { label: 'Toolkit', names: ['Git', 'GitHub', 'C', 'C++', 'Solidity', 'Hardhat'] },
]

export const Skills = () => {
  const availableNames = new Set(skillsData.map((skill) => skill.name))
  return (
    <SectionContainer id="skills" eyebrow="04 / tools I reach for" title="The toolkit.">
      <div className="grid grid-cols-3 gap-6 md:grid-cols-1">
        {groups.map((group, groupIndex) => (
          <MotionDiv
            key={group.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: groupIndex * 0.08 }}
            className="border-t pt-4"
          >
            <div className="mono-label mb-6 text-target">{group.label}</div>
            <div className="flex flex-wrap gap-x-5 gap-y-4">
              {group.names.filter((name) => availableNames.has(name) || name === 'PostgreSQL' || name === 'Socket.io').map((name) => (
                <span key={name} className="text-xl font-semibold tracking-tight sm:text-lg">{name}</span>
              ))}
            </div>
          </MotionDiv>
        ))}
      </div>
      <div className="mt-20 border-l-4 border-target pl-5 text-xl leading-relaxed sm:mt-14 sm:text-lg">
        The stack changes. The standard stays: make it clear, make it resilient, make it feel inevitable.
      </div>
    </SectionContainer>
  )
}
