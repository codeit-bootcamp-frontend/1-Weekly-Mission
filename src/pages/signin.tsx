import SignPageLayout from '@components/SignPageLayout';
import SigninForm from '@components/SigninForm';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Signin() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      router.push('/folder');
    }
  }, []);

  return (
    <SignPageLayout page='signin'>
      <SigninForm />
    </SignPageLayout>
  );
}
