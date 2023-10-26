import * as S from './Form.style';
import EYE_OFF from 'assets/icons/eye-off.svg';

function Form() {
  return (
    <S.Form novalidate>
      <S.InputContainer>
        <S.InputBox>
          <label forHtml='form-email'>이메일</label>
          <S.Input
            type='email'
            placeholder='codeit@codeit.com'
            id='form-email'
          />
          <S.ErrorMessage />
        </S.InputBox>
        <S.InputBox>
          <label forHtml='form-password'>비밀번호</label>
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
      </S.InputContainer>
      <S.Submit type='submit'>로그인</S.Submit>
    </S.Form>
  );
}

export default Form;
