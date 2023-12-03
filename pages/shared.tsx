import Shared from '@/containers/Shared';
import { SharedFolder } from '@/types/Folder.types';
import { getSharedFolderApi } from '@/services/apis';

export async function getStaticProps() {
  const folder = await getSharedFolderApi();

  return {
    props: {
      folder: folder.folder,
    },
  };
}

function SharedPage({ folder }: SharedFolder) {
  return <Shared folder={folder} />;
}

export default SharedPage;
