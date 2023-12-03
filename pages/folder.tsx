import Folder from '@/containers/Folder';
import { Folder as IFolder, Link } from '@/types/Folder.types';
import { getFoldersApi, getLinksApi } from '@/services/apis';

export async function getServerSideProps({ query }: { query: any }) {
  const folderId = query?.folderId;
  try {
    const { data: links } = await getLinksApi(folderId);
    const { data: folders } = await getFoldersApi();

    return {
      props: {
        links,
        folders,
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
  folders: IFolder[];
}

function FolderPage({ links, folders }: Props) {
  return <Folder links={links} folders={folders} />;
}

export default FolderPage;
