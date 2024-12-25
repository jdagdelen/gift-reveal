import React from 'react';

interface GiftImageProps {
  src: string;
  isVisible: boolean;
}

export function GiftImage({ src, isVisible }: GiftImageProps) {
  return (
    <img
      src={src}
      alt="Your gift"
      className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    />
  );
}