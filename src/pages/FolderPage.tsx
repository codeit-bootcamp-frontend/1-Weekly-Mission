import { Helmet } from 'react-helmet-async';
import Header from 'components/common/Header';
import Footer from 'components/common/Footer';
import AddLinkBar from 'components/folder/AddLinkBar';
import FolderContent from 'components/folder/FolderContent';
import { useObserver } from 'hooks/useObserver';

function FolderPage() {
  const footer = useObserver('footer');

  return (
    <>
      <Helmet>
        <title>folder | Linkbrary</title>
      </Helmet>
      <Header page="folder" />
      <AddLinkBar visibleFooter={footer} />
      <FolderContent />
      <Footer />
    </>
  );
}

export default FolderPage;
