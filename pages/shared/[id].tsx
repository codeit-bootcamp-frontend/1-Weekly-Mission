import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Header, Article, Layout } from '@/src/components';
import { useAuth } from '@/src/lib/auth/AuthProvider';

export default function SharedPage() {
  const router = useRouter();
  const { id } = router.query;
  const folderId = id ? `${id}` : '';
  const { links, folders, getFolders, getLinks, getMe, user } = useAuth(true);

  async function getSharedFolder(folderId) {
    await getMe();
    await getLinks(user.id, folderId);
    await getFolders(folderId);
  }

  useEffect(() => {
    getSharedFolder(folderId);
  }, [id]);

  return (
    <Layout>
      <Header items={folders} />
      <Article links={links} />
    </Layout>
  );
}
