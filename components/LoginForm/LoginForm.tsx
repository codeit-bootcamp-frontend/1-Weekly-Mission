import { useForm, FormProvider } from 'react-hook-form';
import LoginInput from '../LoginInput/LoginInput';
import * as Style from './LoginForm.style';

export default function LoginForm ({button, children}) {
  const method = useForm();
  return (
    <FormProvider {...method}>
      <Style.Form onSubmit={method.handleSubmit}>
        <LoginInput type="이메일" />
        <LoginInput type="비밀번호" />
        {children}
        <Style.Button>{button}</Style.Button>
      </Style.Form>
    </FormProvider>
  )
}

// { register, handleSubmit, formState: {errors} }