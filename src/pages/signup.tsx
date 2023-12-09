import SignPageLayout from '@components/SignPageLayout';
import SigninForm from '@components/SigninForm';

export default function Signup() {
  return (
    <SignPageLayout page='signup'>
      <SigninForm />
    </SignPageLayout>
  );
}
