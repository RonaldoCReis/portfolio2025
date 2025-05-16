import { GlowingEffect } from './ui/glowing-effect';
import ExpertiseCard from './ui/ExpertiseCard';
import FuzzyText from './ui/FuzzyText/FuzzyText';

const Expertise = () => {
  return (
    <section
      className="flex items-center justify-center relative pt-10"
      id="expertise"
    >
      <div className=" bg-neutral-900 rounded-3xl w-[95%] mx-auto shadow-2xl border border-neutral-800 opacity-90 pt-0 pb-40 px-8  relative">
        <GlowingEffect
          spread={180}
          glow={true}
          disabled={false}
          proximity={277}
          inactiveZone={0}
          blur={2}
        />
        <div className="h-80 relative w-full flex items-center justify-center">
          <FuzzyText baseIntensity={0.01} hoverIntensity={0.1} color="#ccc">
            expertise
          </FuzzyText>
        </div>
        <div className="max-w-5xl  mx-auto">
          <div className="flex gap-10 justify-stretch [&>*]:flex-1 flex-wrap">
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
                'UX',
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
                'RabbitMQ',
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
                'Auth0/Clerk',
              ]}
              colors={[
                [249, 115, 22],
                [232, 93, 117],
              ]}
            />
          </div>
          <span className="mt-4 block text-sm ">
            <span className="opacity-70">Want to know more? </span>
            <a
              href="https://github.com/RonaldoCReis"
              target="_blank"
              className="text-blue-400 opacity-90"
            >
              Check out my GitHub
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
