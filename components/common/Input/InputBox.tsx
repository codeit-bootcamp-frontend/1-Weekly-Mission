import styled from 'styled-components';
import Input from './Input';

interface Props {
  type: '이메일' | '비밀번호' | '비밀번호 확인';
  placeholder: string;
  register?: any;
  error?: any;
}

export default function InputBox({ type, placeholder, register, error }: Props) {
  const passwordMode = type === '이메일' ? false : true;

  return (
    <InputWrapper>
      <Text>{type}</Text>
      <Input passwordMode={passwordMode} placeholder={placeholder} register={register} error={error} />
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
