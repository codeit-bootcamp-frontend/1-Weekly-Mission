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
    <section className='grid-rows-[repeat(3, auto)] grid w-[32rem] grid-cols-[auto] gap-y-0 tablet:w-[70rem] tablet:grid-cols-[auto_auto] tablet:grid-rows-[auto_auto] tablet:gap-x-50pxr pc:w-[100rem] pc:gap-x-50pxr pc:gap-y-10pxr'>
      <div
        className={`w-[30rem] self-end tablet:w-[26rem] tablet:text-48pxr pc:w-[29rem] ${layoutStyle.title}`}
      >
        {title}
      </div>
      <p
        className={`w-full text-15pxr font-medium leading-normal text-[#6b6b6b] tablet:w-[26rem] tablet:text-[1.6rem] pc:w-[28rem] ${layoutStyle.description}`}
      >
        {description}
      </p>
      <div
        className={`relative mb-16pxr mt-20pxr h-[26rem] w-[32rem] tablet:m-0 tablet:h-[32rem] tablet:w-[38rem] pc:h-[45rem] pc:w-[55rem] ${layoutStyle.image}`}
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
