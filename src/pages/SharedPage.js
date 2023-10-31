import Navigation from '../components/Nav/Navigation';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Main from '../components/Main/Main';

function SharedPage() {
  return (
    <>
      <Navigation page='shared' />
      <Header page='shared' type='folderName' />
      <Main page='shared' type='folder' />
      <Footer />
    </>

  );
}

export default SharedPage;