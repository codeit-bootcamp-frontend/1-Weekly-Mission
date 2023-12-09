import SignPageLayout from '@components/SignPageLayout';
import SignupForm from '@components/SignupForm';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const Signup = () => {
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
};

export default Signup;
