import SignLayout from '@/src/sign/signLayout/SignLayout';
import SignUpForm from '@/src/sign/signForm/SignUpForm';

export default function SignUp() {
  return (
    <SignLayout page='signup'>
      <SignUpForm />
    </SignLayout>
  );
}
