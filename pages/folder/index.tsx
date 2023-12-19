import { useState, createContext, useEffect } from 'react';
import { Article, Header, Layout } from '@/src/components';
import { useAuth } from '@/src/lib/auth/AuthProvider';

export const FooterContext = createContext({
  isFooterVisible: false,
  setIsFooterVisible: (visible: boolean) => {},
});

export default function FolderPage() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const { folders, links, getFolders, getLinks } = useAuth(true);
  
  useEffect (() => {
    getFolders();
    getLinks();
  },[])


  return (
    <FooterContext.Provider value={{ isFooterVisible, setIsFooterVisible }}>
      <Layout>
        <Header />
        <Article links={links} folders={folders} />
      </Layout>
    </FooterContext.Provider>
  );
}