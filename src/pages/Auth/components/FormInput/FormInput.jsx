import * as S from './FormInput.style';
import EYE_OFF from 'assets/icons/eye-off.svg';

function FormInput({ children, type, id, placeholder }) {
  return (
    <S.InputBox>
      <label forhtml={id}>{children}</label>
      <S.Input type={type} placeholder={placeholder} id={id} />
      {type === 'password' && (
        <S.PasswordToggle type='button'>
          <img src={EYE_OFF} alt='비밀번호 표시' />
        </S.PasswordToggle>
      )}
      <S.ErrorMessage />
    </S.InputBox>
  );
}

export default FormInput;
