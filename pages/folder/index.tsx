import { useState, createContext  } from 'react';
import { Article, Header, Layout } from '@/components';
import axios from '@/lib/axios';

export async function getServerSideProps() {
  const response = await axios.get(`users/1/links`);
  const links = response?.data?.data;
  const response2 = await axios.get(`/users/1/folders`);
  const folders = response2?.data?.data;

  return {
    props: {
      links,
      folders,
    },
  };
}

export const FooterContext = createContext({
  isFooterVisible : false,
  setIsFooterVisible : (visible:boolean) => {},
});

export default function FolderPage({ links, folders }) {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  return (
    <FooterContext.Provider value={{isFooterVisible, setIsFooterVisible}}>
      <Layout >
        <Header />
        <Article links={links} folders={folders} />
      </Layout>
    </FooterContext.Provider>
  );
}
