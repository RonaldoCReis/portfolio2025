import React from 'react';
import { StarsBackground } from './stars-background';
import { ShootingStars } from './shooting-stars';

const StarBackground = () => {
  const contentHeight = window.document.getElementById('content')?.offsetHeight;
  return (
    <div
      className="absolute w-full top-0 left-0"
      style={{ height: `${contentHeight}px` }}
    >
      <StarsBackground />
      <ShootingStars />
    </div>
  );
};

export default StarBackground;
