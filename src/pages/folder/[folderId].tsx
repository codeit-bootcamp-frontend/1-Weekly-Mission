import { useRouter } from 'next/router';
import { useEffect } from 'react';
import useRequest from '@/hooks/useRequest';
import { Folder as IFolder, Link } from '@/types/Folder.types';
import Folder from '@/containers/Folder';

function FolderPage() {
  const router = useRouter();
  const folderId = Array.isArray(router.query.folderId)
    ? router.query.folderId[0]
    : router.query.folderId;

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
      params: { folderId: folderId ?? 1 },
    },
  });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      router.push('/signin');
    }
    getFolders({ headers: { Authorization: `Bearer ${accessToken}` } });
    getLinks({ headers: { Authorization: `Bearer ${accessToken}` } });
  }, [folderId]);

  if (!folders || !links) return;

  return (
    <Folder
      links={links.data.folder}
      folders={folders.data.folder}
      folderId={Number(folderId)}
    />
  );
}

export default FolderPage;
