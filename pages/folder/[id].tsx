import { useEffect, useState } from 'react';
import { Article, Header, Layout } from '@/src/components';
import { FooterContext } from '@/pages/folder';
import { useRouter } from 'next/router';
import { useAuth } from '@/src/lib/auth/AuthProvider';

export default function FolderPage() {
  const router = useRouter();
  const { id } = router.query;
  const folderId = id ? `?folderId=${id}` : '';
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const {folders, links, getFolders, getLinks } = useAuth(true)

  useEffect(() => {
    getFolders();
    getLinks(folderId);
  }, [folderId]);

  return (
    <FooterContext.Provider value={{ isFooterVisible, setIsFooterVisible }}>
      <Layout>
        <Header />
        <Article links={links} folders={folders} />
      </Layout>
    </FooterContext.Provider>
  );
}
