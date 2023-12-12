import { useRouter } from 'next/router';
import { useForm, FormProvider } from 'react-hook-form';
import {LoginInput} from '@/components';
import axios from '@/lib/axios';
import { checkLocalToken } from '@/public/checkLocalToken';
import * as Style from './LoginForm.style';

export default function LoginForm({ button, children, formUrl, require, isSignup = false}) {
  const router = useRouter();
  const method: { handleSubmit, watch, setError } = useForm();
  const { watch, setError } = method;
  const loginData = watch(require);

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSignup) {
      const check = await axios.post('/check-email', watch(['email']))};
      // if(check.status !== 200) { setError('email', {type: 'incorrect'})}
    const response = await axios.post(formUrl, loginData);
    if (response.status === 200 ) {
      checkLocalToken(response);
      router.push('/folder');
    // } else {

    // }
    }
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

