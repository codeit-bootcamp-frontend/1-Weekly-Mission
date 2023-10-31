import { useLocation } from 'react-router-dom';
import * as S from './Form.style';
import EYE_OFF from 'assets/icons/eye-off.svg';

function Form() {
  const { pathname: type } = useLocation();
  return (
    <S.Form noValidate>
      <S.InputContainer>
        <S.InputBox>
          <label forhtml='form-email'>이메일</label>
          <S.Input
            type='email'
            placeholder='codeit@codeit.com'
            id='form-email'
          />
          <S.ErrorMessage />
        </S.InputBox>
        <S.InputBox>
          <label forhtml='form-password'>비밀번호</label>
          <S.Input
            type='password'
            placeholder='• • • • • • • •'
            id='form-password'
          />
          <S.PasswordToggle type='button'>
            <img src={EYE_OFF} alt='비밀번호 표시' />
          </S.PasswordToggle>
          <S.ErrorMessage />
        </S.InputBox>
        {type === '/signup' && (
          <S.InputBox>
            <label forhtml='form-password-check'>비밀번호 확인</label>
            <S.Input
              type='password'
              placeholder='• • • • • • • •'
              id='form-password-check'
            />
            <S.PasswordToggle type='button'>
              <img src={EYE_OFF} alt='비밀번호 표시' />
            </S.PasswordToggle>
            <S.ErrorMessage />
          </S.InputBox>
        )}
      </S.InputContainer>
      <S.Submit type='submit'>
        {type === '/signin' ? '로그인' : '회원가입'}
      </S.Submit>
    </S.Form>
  );
}

export default Form;
