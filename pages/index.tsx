import { Inter } from 'next/font/google';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Link href='signin'>로그인 페이지</Link>
      <Link href='folder'>폴더 페이지</Link>
    </div>
  );
}
