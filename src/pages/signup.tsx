import SignPageLayout from '@components/SignPageLayout';
import SignupForm from '@components/SignupForm';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Signup() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      router.push('/folder');
    }
  }, []);

  return (
    <SignPageLayout page='signup'>
      <SignupForm />
    </SignPageLayout>
  );
}
