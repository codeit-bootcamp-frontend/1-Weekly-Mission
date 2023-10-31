import { Helmet } from 'react-helmet-async';
import Header from '../components/Header.js';
import SharedContent from '../components/shared/SharedContent';
import Footer from '../components/Footer.js';

function SharedPage() {
  return (
    <>
      <Helmet>
        <title>shared | Linkbrary</title>
      </Helmet>
      <Header page="shared" />
      <SharedContent />
      <Footer />
    </>
  );
}

export default SharedPage;
