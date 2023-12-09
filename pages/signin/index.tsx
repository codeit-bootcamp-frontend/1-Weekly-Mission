import SignLayout from '@/src/sign/signLayout/SignLayout';
import SignInForm from '@/src/sign/signForm/SignInForm';

export default function SignIn() {
  return (
    <SignLayout page='signin'>
      <SignInForm />
    </SignLayout>
  );
}
