import styled from 'styled-components';
import Input from './Input';
import { FocusEvent } from 'react';

interface Props {
  type: '이메일' | '비밀번호' | '비밀번호 확인';
  validationFunc: (event: FocusEvent<HTMLInputElement>) => string;
}

export default function InputBox({ type, validationFunc }: Props) {
  const passwordMode = type === '이메일' ? false : true;
  const placeholder = type === '이메일' ? '이메일을 입력해 주세요.' : '●●●●●●●●';

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
