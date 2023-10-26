import Layout from 'components/Layout';
import AddLink from './components/AddLink';
import LinkList from './components/LinkList';

function Folder() {
  return (
    <Layout isLoggedIn>
      <AddLink />
      <LinkList />
    </Layout>
  );
}

export default Folder;
