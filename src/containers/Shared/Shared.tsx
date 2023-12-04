import Layout from '@/components/Layout';
import Folder from './components/Folder';
import { SharedFolder } from '@/types/Folder.types';

function Shared({ folder }: SharedFolder) {
  return (
    <Layout isLoggedIn>
      <Folder folder={folder} />
    </Layout>
  );
}

export default Shared;
