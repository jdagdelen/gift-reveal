import React, { useState } from 'react';
import { TapPrompt } from './TapPrompt';
import { GiftImage } from './GiftImage';
// image is at src/public/reveal.png
import giftImageUrl from '../public/reveal.png';


export function GiftReveal() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleTap = () => {
    if (!isRevealed) {
      setIsRevealed(true);
    }
  };

  return (
    <div className="relative w-full h-screen" onClick={!isRevealed ? handleTap : undefined}>
      <GiftImage src={giftImageUrl} isVisible={isRevealed} />
      {!isRevealed && <TapPrompt />}
    </div>
  );
}