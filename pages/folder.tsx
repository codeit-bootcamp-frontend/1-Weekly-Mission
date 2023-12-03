import Folder from '@/containers/Folder';
import { Link } from '@/types/Folder.types';
import { DEFAULT_USER_ID } from '@/services/config/default';
import fetch from '@/services/utils/fetch';

export async function getServerSideProps({ query }: { query: any }) {
  const folderId = query?.folderId;
  try {
    const { data: fetchedData } = await fetch({
      url: `/users/${DEFAULT_USER_ID}/links`,
      method: 'get',
      params: { folderId },
    });
    return {
      props: {
        links: fetchedData.data,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

interface Props {
  links: Link[];
}

function FolderPage({ links }: Props) {
  return <Folder links={links} />;
}

export default FolderPage;
