import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/Button';

function Banner() {
  return (
    <section className='flex justify-center w-full pt-28pxr px-32pxr bg-background tablet:pt-39pxr pc:pt:70pxr '>
      <div className='flex flex-col items-center w-full'>
        <h1 className='w-[26rem] text-center text-32pxr font-bold leading-tight tablet:w-[48.5rem] pc:w-[72rem] pc:text-64pxr'>
          <span className='bg-gradient-to-r from-primary to-[#ff9f9f] bg-clip-text text-transparent'>
            세상의 모든 정보
          </span>
          를<br />
          쉽게 저장하고 관리해 보세요
        </h1>
        <Link
          className='w-[20rem] m-24pxr tablet:w-[35rem] tablet:m-40pxr'
          href='/signup'
        >
          <Button>링크 추가하기</Button>
        </Link>
        <div className='relative w-full h-[24rem] tablet:w-[65rem] tablet:h-[33rem] pc:w-[120rem] pc:h-[59rem]'>
          <Image src='/images/folder-page.png' alt='링크 페이지 예시' fill />
        </div>
      </div>
    </section>
  );
}

export default Banner;
