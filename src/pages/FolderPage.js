import { Helmet } from 'react-helmet-async';
import Header from '../components/Header.js';
import FolderContent from '../components/folder/FolderContent.js';
import Footer from '../components/Footer.js';

function FolderPage() {
  return (
    <>
      <Helmet>
        <title>folder | Linkbrary</title>
      </Helmet>
      <Header />
      <FolderContent />
      <Footer />
    </>
  );
}

export default FolderPage;
