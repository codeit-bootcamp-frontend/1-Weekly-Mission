import { useEffect } from 'react';
import useRequest from '@/hooks/useRequest';
import { Folder as IFolder, Link } from '@/types/Folder.types';
import Folder from '@/containers/Folder';

function FolderPage() {
  const { data: folders, fetch: getFolders } = useRequest<{
    data: { folder: IFolder[] };
  }>({
    skip: true,
    options: {
      url: `folders`,
      method: 'get',
    },
  });
  const { data: links, fetch: getLinks } = useRequest<{
    data: { folder: Link[] };
  }>({
    skip: true,
    options: {
      url: `links`,
      method: 'get',
    },
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    getFolders({ headers: { Authorization: `Bearer ${accessToken}` } });
    getLinks({ headers: { Authorization: `Bearer ${accessToken}` } });
  }, []);

  if (!folders || !links) return;

  return <Folder links={links.data.folder} folders={folders.data.folder} />;
}

export default FolderPage;
