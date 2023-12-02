import Shared from '@/containers/Shared';
import { Link } from '@/containers/Folder/Folder.types';
import fetch from '@/services/utils/fetch';

export interface SharedFolder {
  id: number;
  name: string;
  count: number;
  links: Link[];
  owner: {
    id: number;
    name: string;
    profileImageSource: string;
  };
}

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
