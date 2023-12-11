import Image from 'next/image';

const DEFAULT_PROFILE_IMAGE_SRC = '/images/default-profile-img.png';

interface Props {
  name?: string;
  owner?: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

function Banner({ name, owner }: Props) {
  return (
    <section className='flex flex-col items-center bg-background pb-40pxr pt-10pxr tablet:pb-60pxr tablet:pt-20pxr'>
      <Image
        src={owner?.profileImageSource ?? DEFAULT_PROFILE_IMAGE_SRC}
        alt='폴더 유저 프로필 이미지'
        className='h-40pxr w-40pxr tablet:h-60pxr tablet:w-60pxr'
      />
      <p className='pb-10pxr text-14pxr font-normal tablet:pb-20pxr tablet:pt-12pxr tablet:text-16pxr tablet:leading-8'>{`@${owner?.name}`}</p>
      <h1 className='text-32pxr font-semibold pc:text-40pxr'>{name}</h1>
    </section>
  );
}

export default Banner;
