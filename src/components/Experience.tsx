import { Timeline as TimelineUI } from '@/components/ui/timeline';
import Container from './ui/Container';
import TimelineItem from './ui/TimelineItem';
import nitro1 from '@/assets/nitro1.png';
import nitro2 from '@/assets/nitro2.png';
import imovel1 from '@/assets/imovel1.png';
import imovel2 from '@/assets/imovel2.png';
import eclasse1 from '@/assets/eclasse1.png';
import eclasse2 from '@/assets/eclasse2.png';

const Timeline = () => {
  return (
    <section>
      <Container>
        <div className="max-w-7xl mx-auto  mt-60">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl font-semibold opacity-95">
            My Journey Timeline
          </h2>
          <p className="opacity-70 text-sm md:text-base max-w-md">
            Started as a front-end developer and expanded into the full software
            engineering process. Take a look at my journey.
          </p>
        </div>
      </Container>
      <Container>
        <TimelineUI
          data={[
            {
              title: 'Apr 2024 - Fab 26',
              content: (
                <TimelineItem
                  title="MBA in Software Engineering at USP"
                  type="Degree"
                  description="The best ranked university in Latin America. Focussed in Cloud, Management, Data, Business, and Software Development."
                />
              ),
            },
            {
              title: 'Mar 2024 - Now',
              content: (
                <TimelineItem
                  title="Mid-Level Software Engineer at Nitro"
                  type="Full-Time"
                  description="Building SPAs, websites, and digital products with TypeScript,
                  React, Zustand, TanStack Query, Docker, Vite, SCSS, and more.
                  Scrum sprints, testing, PR reviews, docs, refactoring,
                  and REST API integration."
                  images={[nitro1, nitro2]}
                />
              ),
            },
            {
              title: 'Jan 2024 - Mar',
              content: (
                <TimelineItem
                  title="Jr Software Engineer at Scrap via A&B Tech"
                  type="Full-Time"
                  description="Developed the HR module of an ERP with Next.js, TypeScript,
                  React, Zod, MUI, and TanStack Query. Engaged in daily
                  meetings, PR reviews, and direct mentorship with a senior
                  developer."
                />
              ),
            },
            {
              title: 'Apr 2022 - Dec 23',
              content: (
                <TimelineItem
                  title="IT Intern at Nitro"
                  type="Internship"
                  description=" Rotated through security, infrastructure, and support.
                  Configured network switches, provided L2 support, managed
                  documentation, and tracked equipment. Administered Azure AD
                  for on-premise and cloud integration."
                />
              ),
            },
            {
              title: 'May 2020 - Oct 21',
              content: (
                <TimelineItem
                  title="Front End Developer at Imóvel Guide"
                  type="Internship"
                  description="Led front-end development for a real estate portal, building
                  pages, redesigning UI, and adding features with HTML, SCSS,
                  JS, jQuery, and PHP Laravel. Focused on SEO, boosting traffic
                  20x via PageSpeed optimizations."
                  images={[imovel1, imovel2]}
                />
              ),
            },
            {
              title: 'Jan 2020 - Dec 23',
              content: (
                <TimelineItem
                  title="Bachelor in Information Systems at UNIP"
                  type="Degree"
                  description="Software engineering, management, databases, networks, QA, security, and more. I was responsible for the front-end of the final project, a web app for live classes. made with Typescript, React, and Tailwind. The back-end was made with Java, Spring Boot, and MySql."
                  images={[eclasse1, eclasse2]}
                />
              ),
            },
            {
              title: 'Jan 2017 - Dec 19',
              content: (
                <TimelineItem
                  title="IT for Web technician at ETEC"
                  type="Degree"
                  description="My first contact with programming, learning the base of web development, HTML, CSS, JS, PHP, and MySQL. The final project was a web app for musicians find other musicians to play together."
                />
              ),
            },
          ]}
        />
      </Container>
      <Container>
        <span className="mt-4 block text-sm ">
          <span className="opacity-70">Get to know me better, </span>
          <a
            href="https://www.linkedin.com/in/ronaldocreis/"
            target="_blank"
            className="text-blue-400 opacity-90"
          >
            see my linkedin profile
          </a>
        </span>
      </Container>
    </section>
  );
};

export default Timeline;
