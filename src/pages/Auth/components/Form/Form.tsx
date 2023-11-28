import * as S from './Form.style';
import { useLocation } from 'react-router-dom';
import FormInput from '../FormInput';

function Form() {
  const { pathname: type } = useLocation();
  return (
    <S.Form noValidate>
      <S.InputContainer>
        <FormInput type='email' placeholder='codeit@codeit.com' id='email'>
          이메일
        </FormInput>
        <FormInput type='password' placeholder='• • • • • • • •' id='password'>
          비밀번호
        </FormInput>
        {type === '/signup' && (
          <FormInput
            type='password'
            placeholder='• • • • • • • •'
            id='password-check'
          >
            비밀번호 확인
          </FormInput>
        )}
      </S.InputContainer>
      <S.Submit type='submit'>
        {type === '/signin' ? '로그인' : '회원가입'}
      </S.Submit>
    </S.Form>
  );
}

export default Form;
