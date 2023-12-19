import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';
import { LoginInput } from '@/src/components';
import * as Style from './LoginForm.style';
import { useAuth } from '@/src/lib/auth/AuthProvider';

export default function LoginForm({ button, children, isSignup = false }) {
  const router = useRouter();
  const methods = useForm({ mode: 'onSubmit' });
  const { checkEmail, signIn, signUp } = useAuth();

  async function onSubmit(data) {
    if (isSignup) {
      const response = await checkEmail(data);
      if (!response) {
        methods.setError('email', { type: 'inUse', message: '이미 사용중이 이메일입니다.' });
      }
      await signUp(data);
      router.push('/folder');
    } else {
      await signIn(data);
      router.push('/folder');
    }
  }

  return (
    <FormProvider {...methods}>
      <Style.Form onSubmit={methods.handleSubmit(onSubmit)}>
        <LoginInput type="email" />
        <LoginInput type="password" />
        {children}
        <Style.Button type="submit">{button}</Style.Button>
      </Style.Form>
    </FormProvider>
  );
}
