import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <main>
        {/*
         // 랜딩
        // img 태그 -> Image 컴포넌트 () / 조건 프로퍼티 => width, height 무조건
        // a 태그 => Link 컴포넌트
        */}
      </main>
    </>
  );
}
