import AuthFormLayout from '@/src/component/layout/AuthFormLayout';
import SignInForm from '@/src/component/sign-in/feature-signin-form/SignInForm';

export default function signin() {
  const headerMessage = {
    message: '이미 회원이신가요?' as const,
    linkMessage: '로그인하기' as const,
    path: '/signin' as const,
  };
  return (
    <AuthFormLayout
      headerMessage={headerMessage}
      socialMessage="다른 방식으로 가입하기"
    >
      <SignInForm />
    </AuthFormLayout>
  );
}
