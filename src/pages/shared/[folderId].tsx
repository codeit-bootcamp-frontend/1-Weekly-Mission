import {
  getSharedFolderInfoApi,
  getSharedLinksApi,
  getSharedUserApi,
} from '@/services/apis';
import { Folder, Link, User } from '@/types/Folder.types';
import Shared from '@/containers/Shared';

export interface SharedPageProps {
  links: Link[];
  folderInfo: Folder[];
  userInfo: User[];
}

interface SSGProps {
  query: {
    [q: string]: string;
  };
}

export async function getServerSideProps({ query }: SSGProps) {
  const { folderId } = query;
  try {
    const [{ data: links }, { data: folderInfo }, { data: userInfo }] =
      await Promise.all([
        getSharedLinksApi(folderId),
        getSharedFolderInfoApi(folderId),
        getSharedUserApi(),
      ]);

    return {
      props: {
        links,
        folderInfo,
        userInfo,
      },
    };
  } catch {
    return {
      notFound: true,
    };
  }
}

function SharedPage({ links, folderInfo, userInfo }: SharedPageProps) {
  return <Shared links={links} folderInfo={folderInfo} userInfo={userInfo} />;
}

export default SharedPage;
