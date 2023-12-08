import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

function Banner() {
  return (
    <section className='pc:pt:70pxr flex w-full justify-center bg-background px-32pxr pt-28pxr tablet:pt-39pxr '>
      <div className='flex w-full flex-col items-center'>
        <h1 className='w-[26rem] text-center text-32pxr font-bold leading-tight tablet:w-[48.5rem] pc:w-[72rem] pc:text-64pxr'>
          <span className='bg-gradient-to-r from-primary to-[#ff9f9f] bg-clip-text text-transparent'>
            세상의 모든 정보
          </span>
          를<br />
          쉽게 저장하고 관리해 보세요
        </h1>
        <Link
          href='/signup'
          className='m-24pxr w-[20rem] tablet:m-40pxr tablet:w-[35rem]'
        >
          <Button>링크 추가하기</Button>
        </Link>
        <div className='relative h-[24rem] w-full tablet:h-[33rem] tablet:w-[65rem] pc:h-[59rem] pc:w-[120rem]'>
          <Image src='/images/folder-page.png' alt='링크 페이지 예시' fill />
        </div>
      </div>
    </section>
  );
}

export default Banner;
