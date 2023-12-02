import Head from 'next/head';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import AddLinkBar from '@/components/folder/AddLinkBar';
import FolderContent from '@/components/folder/FolderContent';
import { useObserver } from '@/hooks/useObserver';

export default function Folder() {
  return (
    <>
      <Head>
        <title>folder | Linkbrary</title>
      </Head>
      <Header page="folder" />
      <AddLinkBar />
      <FolderContent />
      <Footer />
    </>
  );
}
