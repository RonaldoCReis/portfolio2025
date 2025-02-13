import { useRef } from 'react';
import Container from './ui/Container';
import ShinyText from './ui/ShinyText/ShinyText';
import CountUp from './ui/CountUp/CountUp';
import { Cover } from './ui/cover';
import VariableProximity from './ui/VariableProximity/VariableProximity';
import { getContributions } from '@/service/getContributions';

const contributions = await getContributions();

const Home = () => {
  const containerRef = useRef(null);
  const START_YEAR = 2020;
  const currentYear = new Date().getFullYear();
  const yearsOfExperience = currentYear - START_YEAR;
  return (
    <>
      <section className="relative mb-40" ref={containerRef}>
        <Container>
          <h1 className="opacity-900 font-semibold text-4xl md:text-6xl pt-52 block leading-tight">
            <VariableProximity
              label={"I'm Ronaldo Reis"}
              fromFontVariationSettings="'wght' 600, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={125}
            />
          </h1>
          <div className="flex items-center font-semibold text-3xl md:text-5xl gap-2">
            <h2>
              <ShinyText text={'Software Engineer'} speed={5} />
            </h2>
            <span className="leading-none">🇧🇷</span>
          </div>
          <div className="flex items-center gap-10 mt-16 mb-32 flex-wrap">
            <div className="flex items-center gap-2">
              <span className="font-black text-5xl md:text-6xl opacity-85 leading-none">
                +<CountUp from={1} to={yearsOfExperience} duration={0.5} />
              </span>
              <span className="font-semibold opacity-80  md:text-xl leading-none md:leading-6 max-w-20 block">
                Years of exp
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-black text-4xl md:text-5xl opacity-85 leading-none">
                +
                <CountUp to={contributions.totalContributions} duration={0.5} />
              </span>
              <span className="font-semibold opacity-80 leading-4 max-w-[130px] block">
                Contributions in the last year
              </span>
            </div>
          </div>

          <a href="#expertise">
            <Cover className="p-1 md:text-lg cursor-pointer">
              Know me better
            </Cover>
          </a>
        </Container>
      </section>
    </>
  );
};

export default Home;
