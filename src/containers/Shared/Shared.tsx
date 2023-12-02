import Layout from '@/components/Layout';
import Folder from './components/Folder';
import { SharedFolder } from 'pages/shared';

interface Props {
  folder?: SharedFolder;
}

function Shared({ folder }: Props) {
  return (
    <Layout isLoggedIn>
      <Folder folder={folder} />
    </Layout>
  );
}

export default Shared;
