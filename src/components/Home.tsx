import { useRef } from 'react';
import Container from './ui/Container';
import ShinyText from './ui/ShinyText/ShinyText';
import CountUp from './ui/CountUp/CountUp';
import { Cover } from './ui/cover';
import VariableProximity from './ui/VariableProximity/VariableProximity';

const Home = () => {
  const containerRef = useRef(null);
  return (
    <>
      <div className="relative mb-40" ref={containerRef}>
        <Container>
          <h1 className="opacity-900 font-semibold text-6xl pt-52 block leading-tight">
            <VariableProximity
              label={"I'm Ronaldo Reis"}
              fromFontVariationSettings="'wght' 600, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef}
              radius={125}
            />
          </h1>
          <div className="flex items-center font-semibold text-5xl gap-2">
            <h2>
              <ShinyText text={'Software Engineer'} speed={5} />
            </h2>
            <span className="leading-none">🇧🇷</span>
          </div>
          <div className="flex items-center gap-10 mt-16 mb-32">
            <div className="flex items-center gap-2">
              <span className="font-black text-6xl opacity-85 leading-none">
                +<CountUp from={1} to={5} duration={0.5} />
              </span>
              <span className="font-semibold opacity-80 text-xl leading-6 max-w-20 block">
                Years of exp
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-black text-5xl opacity-85 leading-none">
                +<CountUp to={1432} duration={0.5} />
              </span>
              <span className="font-semibold opacity-80 leading-4 max-w-[130px] block">
                Contributions in the last year
              </span>
            </div>
          </div>

          <a href="#expertise">
            <Cover className="p-1 text-lg cursor-pointer">Know me better</Cover>
          </a>
        </Container>
      </div>
    </>
  );
};

export default Home;
