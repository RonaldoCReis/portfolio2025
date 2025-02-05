import { useState } from 'react';
import { CardSpotlight } from './card-spotlight';
import DecryptedText from './DecryptedText/DecryptedText';

type ExpertiseCardProps = {
  title: string;
  items: string[];
  colors?: number[][];
};

const ExpertiseCard = ({ title, items, colors }: ExpertiseCardProps) => {
  const [isHovering, setIsHovering] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardSpotlight colors={colors}>
        <h3 className="relative font-semibold text-lg">{title}</h3>
        <ul className="relative opacity-80 mt-4">
          {items.map((item, index) => (
            <li key={index}>
              <DecryptedText
                text={item}
                sequential
                parentClassName="!block"
                triggerAnimation={isHovering}
              />
            </li>
          ))}
        </ul>
      </CardSpotlight>
    </div>
  );
};

export default ExpertiseCard;
