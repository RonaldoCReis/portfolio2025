import ASCIIText from './ui/ASCIIText/ASCIIText';
import { GlowingEffect } from './ui/glowing-effect';
import { CardSpotlight } from './ui/card-spotlight';
import ExpertiseCard from './ui/ExpertiseCard';

const Expertise = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="h-[95vh] bg-neutral-900 rounded-3xl w-[95%] mx-auto shadow-2xl border border-neutral-800 opacity-90 pt-0 p-8 relative">
        <GlowingEffect
          spread={180}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.1}
          blur={3}
        />
        <div className="h-80 relative w-full">
          <ASCIIText text="expertise" enableWaves={false} asciiFontSize={6} />
        </div>
        <div className="flex gap-10 justify-stretch [&>*]:flex-1 max-w-5xl mx-auto">
          <ExpertiseCard
            title="Front-end Development"
            items={[
              'Typescript',
              'React',
              'NextJs',
              'Zustand/Context Api',
              'Tanstack Query',
              'Tailwind CSS',
              'Jest',
              'SEO',
            ]}
          />
          <ExpertiseCard
            title="Back-end Development"
            items={[
              'Typescript',
              'NodeJs',
              'Express/Fastify',
              'Prisma',
              'Java',
              'Spring Boot',
              'PostgreSQL',
              'MongoDB',
            ]}
            colors={[
              [34, 197, 94],
              [16, 185, 129],
            ]}
          />
          <ExpertiseCard
            title="Tools"
            items={[
              'AWS',
              'Docker',
              'VsCode',
              'IntelliJ',
              'Figma',
              'Git',
              'GraphQL',
              'Scrum/kanban',
            ]}
            colors={[
              [249, 115, 22],
              [232, 93, 117],
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Expertise;
