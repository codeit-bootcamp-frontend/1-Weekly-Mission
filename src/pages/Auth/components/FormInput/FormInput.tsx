import * as S from './FormInput.style';
import { InputHTMLAttributes } from 'react';
import EYE_OFF from '@assets/icons/eye-off.svg';

function FormInput({
  children,
  type,
  id,
  placeholder,
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <S.InputBox>
      <label htmlFor={id}>{children}</label>
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
