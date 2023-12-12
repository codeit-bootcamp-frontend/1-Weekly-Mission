import { ReactNode, useEffect, useState } from 'react';
import { Nav, Footer } from '@/components';
import axios from '@/lib/axios';

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
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
      <Footer />
    </>
  );
}
