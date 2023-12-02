import Image, { StaticImageData } from 'next/image';

interface Props {
  src: string | StaticImageData;
  isHover: boolean;
}

export default function CardImage({ src, isHover }: Props) {
  const scale = isHover ? 'scale-[1.3]' : '';

  return (
    <div
      className={`w-full m-h-[12.5rem] h-[12.5rem] relative overflow-hidden shrink-0`}
    >
      <div
        className={`transition duration-[0.3s] ease-in-out w-full h-full transform ${scale}`}
      >
        <Image
          fill
          sizes='(max-width: 768px)100vw'
          className='h-0 w-0'
          src={src}
          alt='카드 이미지'
        />
      </div>
    </div>
  );
}
