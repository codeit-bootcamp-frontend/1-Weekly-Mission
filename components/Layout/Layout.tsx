import { Nav, Footer } from '@/components';
import { ReactNode, RefObject, useEffect, useState } from 'react';
import axios from '@/lib/axios';

interface Props {
  children: ReactNode;
  footerRef?: RefObject<HTMLDivElement>;
}

export default function Layout({ children, footerRef }: Props) {
  const [userData, setUserData] = useState();

  async function getUserData() {
    const response = await axios.get('/users/1');
    const userData = response?.data?.data[0];
    setUserData(userData);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <>
      <Nav data={userData} />
      {children}
      <Footer ref={footerRef} />
    </>
  );
}
