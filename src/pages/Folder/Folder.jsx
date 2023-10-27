import Layout from 'components/Layout';
import AddLink from './components/AddLink';
import LinkList from './components/LinkList';

const DEFAULT_USER_ID = 1;

function Folder() {
  return (
    <Layout isLoggedIn userId={DEFAULT_USER_ID}>
      <AddLink />
      <LinkList userId={DEFAULT_USER_ID} />
    </Layout>
  );
}

export default Folder;
