import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <main>
        <Link href='/signin'>로그인</Link>
        <Link href='/signup'>회원가입</Link>
        <Link href='/folder'>폴더 페이지</Link>
      </main>
    </>
  );
}
