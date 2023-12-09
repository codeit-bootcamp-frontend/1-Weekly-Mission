import AuthFormLayout from '@/src/component/layout/AuthFormLayout';
import SignInForm from '@/src/component/sign-in/feature-signin-form/SignInForm';

export default function signin() {
  return (
    <AuthFormLayout>
      <SignInForm />
    </AuthFormLayout>
  );
}
