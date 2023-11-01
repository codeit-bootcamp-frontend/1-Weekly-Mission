import { Helmet } from 'react-helmet-async';
import Header from '../components/common/Header.js';
import SharedContent from '../components/shared/SharedContent';
import Footer from '../components/common/Footer.js';

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
