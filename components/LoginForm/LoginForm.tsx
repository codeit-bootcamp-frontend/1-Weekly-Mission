import { useForm, FormProvider } from 'react-hook-form';
import LoginInput from '../LoginInput/LoginInput';
import axios from '@/lib/axios';
import * as Style from './LoginForm.style';
import { useLocalToken } from '@/public/useLocalToken';
import { useRouter } from 'next/router';

export default function LoginForm ({button, children}) {
  const router = useRouter();
  const method : {handleSubmit, watch} = useForm();
  const {watch} = method;
  const loginData = watch();

  async function handleSubmit (e) {
    e.preventDefault();
    const response = await axios.post('/sign-in', loginData);
    await useLocalToken(response);
    router.push('/');
  }

  return (
    <FormProvider {...method}>
      <Style.Form onSubmit={handleSubmit}>
        <LoginInput type="이메일" />
        <LoginInput type="비밀번호" />
        {children}
        <Style.Button>{button}</Style.Button>
      </Style.Form>
    </FormProvider>
  )
}

