import Head from 'next/head';
import Header from '@/components/common/Header';
import SharedContent from '@/components/shared/SharedContent';
import Footer from '@/components/common/Footer';

export default function Shared() {
  return (
    <>
      <Head>
        <title>shared | Linkbrary</title>
      </Head>
      <Header page="shared" />
      <SharedContent />
      <Footer />
    </>
  );
}
