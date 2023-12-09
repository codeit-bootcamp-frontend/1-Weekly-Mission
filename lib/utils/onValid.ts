import { post } from '../api';

function isNotEqualPw(data: any): boolean {
  return data.password !== data.pwCheck;
}

async function isDuplicatedEmail(data: any): Promise<boolean> {
  return (await post('check-email', { email: data.email })) === 409;
}

async function isValid(data: any, path: string): Promise<boolean> {
  const body = {
    email: data.email,
    password: data.password,
  };
  return (await post(path, body)) === 200;
}

export async function onSignIn(data: any, setError: any) {
  if (await isValid(data, 'sign-in')) return (window.location.href = '/folder');
  setError('email', { message: '이메일을 확인해주세요.' });
  setError('password', { message: '비밀번호를 확인해주세요.' });
}

export async function onSignUp(data: any, setError: any) {
  if (isNotEqualPw(data)) return setError('pwCheck', { message: '비밀번호가 일치하지 않아요.' }, { shouldFocus: true });
  if (await isDuplicatedEmail(data)) return setError('email', { message: '이미 존재하는 이메일입니다.' }, { shouldFocus: true });
  if (await isValid(data, 'sign-up')) return (window.location.href = '/folder');
}
