import { useEffect, useState } from 'react';
import { Article, Header, Layout } from '@/components';
import { FooterContext } from '@/pages/folder';
import axios from '@/lib/axios';
import { useRouter } from 'next/router';

export default function FolderPage() {
  const router = useRouter();
  const {id} = router.query;
  const folderId = id ? `?folderId=${id}` : '';
  const [links, setLinks] = useState();
  const [folders, setFolders] = useState();
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  async function getLinks () {
    const response = await axios.get(`users/1/links${folderId}`);
    const linksData = response?.data.data;
    const response2 = await axios.get(`users/1/folders`);
    const foldersData = response2?.data?.data;
    setLinks(linksData);
    setFolders(foldersData)
  }


  useEffect(() => {
    getLinks();
  }, [id])

  return (
    <FooterContext.Provider value={{isFooterVisible, setIsFooterVisible}}>
      <Layout >
        <Header />
        <Article links={links} folders={folders} />
      </Layout>
    </FooterContext.Provider>
  );
}
