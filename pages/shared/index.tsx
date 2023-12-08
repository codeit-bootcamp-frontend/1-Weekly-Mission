import { useRef, useState } from 'react';
import axios from '@/lib/axios';
import { Nav, Header, Article, Footer } from '@/components';
import useIntersectionObserver from '@/public/useIntersectionObserver';
import Layout from '@/components/Layout/Layout';

export interface Link {
  id: number;
  image_source?: string;
  imageSource?: string;
  description: string;
  url: string;
  title: string;
  createdAt?: string;
  created_at?: string;
}

interface Owner {
  id: number;
  name: string;
  profileImageSource: string;
}

export interface Items {
  id?: number;
  name: string;
  owner: Owner;
  links: Link[];
  count: string;
}

// interface User {
//   email : string;
//   image_source : string;
// }

export async function getStaticProps() {
  const response = await axios.get('/sample/folder');
  const folderData = response?.data?.folder;

  return {
    props: {
      folderData,
    },
  };
}

interface Props {
  folderData: Items;
}

export default function SharedPage({ folderData }: Props) {
  const linkAddBarRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const isIntersecting = useIntersectionObserver([linkAddBarRef, footerRef]);

  return (
    <Layout>
      <Header
        items={folderData}
        linkAddBarRef={linkAddBarRef}
        isIntersecting={isIntersecting}
      />
      <Article links={folderData.links} />
    </Layout>
  );
}
