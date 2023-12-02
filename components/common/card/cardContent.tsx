interface Props {
  isHover: boolean;
}

export default function CardContent({ isHover }: Props) {
  const Color = isHover ? 'bg-bg' : 'bg-white';
  return (
    <div
      className={`${Color} flex flex-col gap-[0.625rem] h-full px-5 py-[0.9375rem]`}
    >
      <div className='text-[#666] text-[0.875rem]'>10 minute ago</div>
      <div className='leading-6 line-clamp-2'>
        Lorem ipsum dolor sit amet consectetur. Metus amet habitant nunc
        consequat dflkwd
      </div>
      <div className='text-[#333] text-[0.875rem]'>2023.9.10</div>
    </div>
  );
}
