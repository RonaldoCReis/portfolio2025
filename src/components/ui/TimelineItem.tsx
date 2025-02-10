import GradientText from './GradientText/GradientText';
import TimelineItemImage from './TimelineItemImage';

type TimelineItemProps = {
  title: string;
  description?: string;
  type: 'Degree' | 'Full-Time' | 'Freelance' | 'Internship';
  images?: ImageMetadata[];
};

const typeColors: Record<TimelineItemProps['type'], string[]> = {
  Degree: ['#dd7bbb', '#d79f1e', '#dd7bbb'],
  'Full-Time': ['#2d8a2d', '#7eb94e', '#2d8a2d'],
  Internship: ['#1E90FF', '#00BFFF', '#1E90FF'],
  Freelance: ['#800080', '#DA70D6', '#800080'],
};

const TimelineItem = ({
  description,
  title,
  type,
  images,
}: TimelineItemProps) => {
  return (
    <div className="max-w-lg">
      <h2 className="font-semibold text-xl opacity-80 mb-2">
        {type !== 'Full-Time' && (
          <GradientText
            colors={typeColors[type]}
            animationSpeed={5}
            className="!mx-0 cursor-text opacity-95"
          >
            {type}
          </GradientText>
        )}

        {title}
      </h2>
      <p className="opacity-65">{description}</p>
      <div className="flex gap-2 mt-4">
        {images?.map((image) => (
          <TimelineItemImage key={image.src} src={image.src} title={title} />
        ))}
      </div>
    </div>
  );
};

export default TimelineItem;
