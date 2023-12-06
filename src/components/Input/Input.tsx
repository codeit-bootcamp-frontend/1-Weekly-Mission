import * as S from './Input.style';
import { useState } from 'react';
import { IconEyeOff, IconEyeOn } from '@/public/svgs';

interface Props {
  placeholder?: string;
  errorMessage?: string;
  type?: string;
  onBlur?: () => void;
}

function Input({
  placeholder = '내용 입력',
  errorMessage,
  type: initialType = 'text',
  onBlur,
}: Props) {
  const [type, setType] = useState(initialType);

  const toggleShow = () => {
    setType((prevType) => (prevType === 'text' ? 'password' : 'text'));
  };

  return (
    <S.Container>
      <S.Input
        placeholder={placeholder}
        $error={Boolean(errorMessage)}
        type={type}
        onBlur={onBlur}
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
