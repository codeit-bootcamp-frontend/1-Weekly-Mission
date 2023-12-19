import { ReactNode, useEffect } from 'react';
import { Nav, Footer } from '@/src/components';
import { useAuth } from '@/src/lib/auth/AuthProvider';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { getMe, user } = useAuth(true);

  useEffect(() => {
    getMe();
  }, []);

  return (
    <>
      <Nav data={user} />
      {children}
      <Footer />
    </>
  );
}
