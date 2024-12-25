import React from 'react';
import { Gift } from 'lucide-react';

export function TapPrompt() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
      <Gift className="w-16 h-16 mb-4 animate-bounce" />
      <p className="text-2xl font-bold">Tap to Reveal</p>
    </div>
  );
}