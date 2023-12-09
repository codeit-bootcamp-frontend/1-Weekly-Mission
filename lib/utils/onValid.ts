import { post } from '../api';

export async function onValidSignIn(data: any, setError: any) {
  const body = {
    email: data.email,
    password: data.password,
  };
  const isSignIn = (await post('sign-in', body)) === 200;
  if (isSignIn) {
    window.location.href = '/folder';
  } else {
    setError('email', { message: '이메일을 확인해주세요.' });
    setError('password', { message: '비밀번호를 확인해주세요.' });
  }
}
