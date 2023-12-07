import Image from 'next/image';

interface Props {
  data: {
    id: number;
    layout: string;
    title: JSX.Element;
    description: string;
    imgSrc: string;
    imgAlt: string;
  };
}

function Card({ data }: Props) {
  const { layout, title, description, imgSrc, imgAlt } = data;

  const layoutStyle = {
    image:
      layout === 'odd'
        ? 'row-start-2 tablet:col-start-2 tablet:row-start-1 tablet:row-span-2'
        : 'row-start-2 tablet:col-start-1 tablet:row-start-1 tablet:row-span-2',
    title:
      layout === 'odd'
        ? 'row-start-1 tablet:col-start-1'
        : 'row-start-1 tablet:col-start-2',
    description:
      layout === 'odd'
        ? 'row-start-3 tablet:col-start-1 tablet:row-start-2'
        : 'row-start-3 tablet:col-start-2 tablet:row-start-2',
  };

  return (
    <section className='grid grid-cols-[auto] grid-rows-[repeat(3, auto)] gap-y-0 w-[32rem] tablet:grid-cols-[auto_auto] tablet:grid-rows-[auto_auto] tablet:gap-x-50pxr tablet:w-[70rem] pc:gap-x-50pxr pc:gap-y-10pxr pc:w-[100rem]'>
      <div
        className={`self-end w-[30rem] tablet:w-[26rem] tablet:text-48pxr pc:w-[29rem] ${layoutStyle.title}`}
      >
        {title}
      </div>
      <p
        className={`w-full text-[#6b6b6b] text-15pxr font-medium leading-normal tablet:w-[26rem] tablet:text-[1.6rem] pc:w-[28rem] ${layoutStyle.description}`}
      >
        {description}
      </p>
      <div
        className={`relative mt-20pxr mb-16pxr w-[32rem] h-[26rem] tablet:m-0 tablet:w-[38rem] tablet:h-[32rem] pc:w-[55rem] pc:h-[45rem] ${layoutStyle.image}`}
      >
        <Image
          src={imgSrc}
          alt={imgAlt}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </section>
  );
}

export default Card;
