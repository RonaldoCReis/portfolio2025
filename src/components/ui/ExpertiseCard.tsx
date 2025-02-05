import { CardSpotlight } from './card-spotlight';
import DecryptedText from './DecryptedText/DecryptedText';

type ExpertiseCardProps = {
  title: string;
  items: string[];
  colors?: number[][];
};

const ExpertiseCard = ({ title, items, colors }: ExpertiseCardProps) => {
  return (
    <CardSpotlight colors={colors}>
      <h3 className="relative font-semibold text-lg">{title}</h3>
      <ul className="relative opacity-80 mt-4">
        {items.map((item, index) => (
          <li key={index}>
            <DecryptedText text={item} sequential parentClassName="!block" />
          </li>
        ))}
      </ul>
    </CardSpotlight>
  );
};

export default ExpertiseCard;
