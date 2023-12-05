import Image from 'next/image';
import { useState } from 'react';
import CardImage from './cardImage';
import No from '@/public/assets/images/default.png';
import CardContent from './cardContent';

export default function Card() {
  const [isHover, setIsHover] = useState(false);
  const handleOver = () => {
    setIsHover(true);
  };
  const handleLeave = () => {
    setIsHover(false);
  };

  return (
    <div
      className='flex flex-col w-[21.25rem] h-[20.875rem] rounded-[0.9375rem] overflow-hidden shadow-[0_0.2rem_0.8rem_0_rgba(51,50,54,0.1)]'
      onMouseOver={handleOver}
      onMouseLeave={handleLeave}
    >
      <CardImage src={No} isHover={isHover} />
      <CardContent isHover={isHover} />
    </div>
  );
}
