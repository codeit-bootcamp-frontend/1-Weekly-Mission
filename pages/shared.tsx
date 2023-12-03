import Shared from '@/containers/Shared';
import { SharedFolder } from '@/types/Folder.types';
import fetch from '@/services/utils/fetch';

export async function getStaticProps() {
  const { data: fetchedData } = await fetch({
    url: '/sample/folder',
    method: 'get',
  });

  return {
    props: {
      folder: fetchedData.folder,
    },
  };
}

interface Props {
  folder: SharedFolder;
}

function SharedPage({ folder }: Props) {
  return <Shared folder={folder} />;
}

export default SharedPage;
