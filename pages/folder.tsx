import Head from 'next/head';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AddLinkBar from '@/components/folder/AddLinkBar';
import FolderContent from '@/components/folder/FolderContent';
import Script from 'next/script';

export default function Folder() {
  return (
    <>
      <Head>
        <title>folder | Linkbrary</title>
      </Head>
      <Script
        src="https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js"
        integrity="sha384-mXVrIX2T/Kszp6Z0aEWaA8Nm7J6/ZeWXbL8UpGRjKwWe56Srd/iyNmWMBhcItAjH"
        crossOrigin="anonymous"
      ></Script>
      <Header page="folder" />
      <AddLinkBar />
      <FolderContent />
      <Footer />
    </>
  );
}
