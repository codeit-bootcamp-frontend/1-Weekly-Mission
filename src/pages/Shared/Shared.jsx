import Layout from 'components/Layout';
import Folder from './components/Folder';

function Shared() {
  return (
    <Layout isLoggedIn>
      <Folder />
    </Layout>
  );
}

export default Shared;
