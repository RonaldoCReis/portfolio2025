import React from 'react';
import { Lens } from './lens';

type TimelineItemImageProps = {
  src: string;
  title: string;
};

const TimelineItemImage = ({ src, title }: TimelineItemImageProps) => {
  return (
    <Lens zoomFactor={3} lensSize={150}>
      <img
        src={src}
        alt={title}
        className="w-60 h-40 rounded-lg object-cover"
      />
    </Lens>
  );
};

export default TimelineItemImage;
