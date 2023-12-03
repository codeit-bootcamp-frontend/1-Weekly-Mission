import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  children: ReactNode;
}

export default function SignLayout({ children }: Props) {
  return (
    <div className='bg-bg h-screen flex justify-center pt-[9.375rem] '>
      <form className='flex flex-col items-center'>
        <Link className='relative w-[210.583px] h-[38px]' href='/'>
          <Image
            fill
            src='/assets/icons/logo.svg'
            alt='로고'
            className='mb-4'
            priority
          />
        </Link>
        {children}
      </form>
    </div>
  );
}
