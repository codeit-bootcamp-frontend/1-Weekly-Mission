import { SharedPageProps } from '@/pages/shared/[folderId]';
import Layout from '@/components/Layout';
import Folder from './components/Folder';

function Shared({ links, folderInfo, userInfo }: SharedPageProps) {
  return (
    <Layout isLoggedIn>
      <Folder links={links} folderInfo={folderInfo} userInfo={userInfo} />
    </Layout>
  );
}

export default Shared;
