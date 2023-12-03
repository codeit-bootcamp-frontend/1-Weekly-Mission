import Folder from '@/containers/Folder';
import { Link } from '@/types/Folder.types';
import { getLinksApi } from '@/services/apis';

export async function getServerSideProps({ query }: { query: any }) {
  const folderId = query?.folderId;
  try {
    const { data } = await getLinksApi(folderId);

    return {
      props: {
        links: data,
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
