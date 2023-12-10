import AuthFormLayout from '@/src/component/layout/AuthFormLayout';
import SignInForm from '@/src/component/sign-in/feature-signin-form/SignInForm';
import Head from 'next/head';

export default function signin() {
  const headerMessage = {
    message: '회원이 아니신가요?' as const,
    linkMessage: '회원가입하기' as const,
    path: '/signup' as const,
  };
  return (
    <>
      <Head>
        <title>signin</title>
      </Head>
      <AuthFormLayout headerMessage={headerMessage} socialMessage="소셜 로그인">
        <SignInForm />
      </AuthFormLayout>
    </>
  );
}
