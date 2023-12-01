import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/assets/icons/logo.svg';

interface Props {
  children: ReactNode;
}

export default function SignLayout({ children }: Props) {
  return (
    <div className='bg-bg h-screen flex justify-center pt-[9.375rem] '>
      <form className='flex flex-col items-center'>
        <Link href='/'>
          <Image
            src={logo}
            alt='로고'
            className='w-[210.583px] h-[38px] mb-4'
            priority
          />
        </Link>
        {children}
      </form>
    </div>
  );
}
