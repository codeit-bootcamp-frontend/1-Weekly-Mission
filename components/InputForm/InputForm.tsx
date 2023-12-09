import * as S from './InputForm.styled';
import { ChangeEvent, MouseEventHandler, useEffect, useState } from 'react';


interface InputProps {
  name: string;
  type: string;
  placeholder: string;
}

export default function  InputForm({
  name,
  type,
  placeholder
}: InputProps) {
  const [value, setValue] = useState("");

  const [isError, setIsError] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsError(false);
  }

  const blurHandler = () => {
    if (value === "") {
      setIsError(true);
    }
  };

  return (
    <S.InputFormContainer>
      <S.Label>{name}</S.Label>
      {/* <S.StyledInput> */}
      <S.Input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={blurHandler}
      />
        {/* <S.VisibleButton onClick={handleVisibility}>
          {isVisible ? (
            <Image src={EyeOnImage} width={16} height={16} alt='비밀번호 보이기' />
            ) : (
            <Image src={EyeOffImage} width={16} height={16} alt='비밀번호 가리기' />
            )
          }
        </S.VisibleButton> */}
      {/* </S.StyledInput> */}
      {isError && 
        <S.ErrorText>{name}을 입력해 주세요</S.ErrorText>
      }
    </S.InputFormContainer>
  );
}
