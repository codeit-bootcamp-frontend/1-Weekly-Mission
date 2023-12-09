import styled from 'styled-components';
import Input from './Input';
import { FocusEvent } from 'react';

interface Props {
  type: '이메일' | '비밀번호' | '비밀번호 확인';
  placeholder: string;
  validationFunc: (event: FocusEvent<HTMLInputElement>) => string;
}

export default function InputBox({ type, placeholder, validationFunc }: Props) {
  const passwordMode = type === '이메일' ? false : true;

  return (
    <InputWrapper>
      <Text>{type}</Text>
      <Input passwordMode={passwordMode} placeholder={placeholder} handleInputBlur={validationFunc} />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Text = styled.div`
  font-size: 1.4rem;
`;
