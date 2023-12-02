import * as S from './Input.style';
import { useState } from 'react';
import { IconEyeOff, IconEyeOn } from '@/public/svgs';

interface Props {
  placeholder?: string;
  errorMessage?: string;
  type?: string;
}

function Input({
  placeholder = '내용 입력',
  errorMessage,
  type: initialType = 'text',
}: Props) {
  const [type, setType] = useState(initialType);

  const toggleShow = () => {
    setType((prevType) => {
      if (prevType === 'text') {
        return 'password';
      } else {
        return 'text';
      }
    });
  };

  return (
    <S.Container>
      <S.Input
        placeholder={placeholder}
        $error={Boolean(errorMessage)}
        type={type}
      />
      {initialType === 'password' && (
        <S.Toggle onClick={toggleShow}>
          {type === 'password' && <IconEyeOff />}
          {type === 'text' && <IconEyeOn />}
        </S.Toggle>
      )}
      <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
    </S.Container>
  );
}

export default Input;
