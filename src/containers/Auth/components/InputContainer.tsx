import {
  FocusEvent,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import Input from '@/components/Input';
import {
  validateEmailPattern,
  validatePasswordPattern,
} from '@/utils/validation';

export const ERROR_MESSAGES = {
  email: {
    emptyInput: '이메일을 입력해주세요.',
    invalidInput: '올바른 이메일 주소가 아닙니다.',
  },
  password: {
    emptyInput: '비밀번호를 입력해주세요.',
    invalidInput: '비밀번호는 영문, 숫자 조합 8자 이상 입력해 주세요.',
  },
  passwordCheck: {
    invalidInput: '비밀번호가 일치하지 않아요.',
  },
};

interface InputContainerProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  type: string;
  placeholder: string;
  errorMessage: string;
  clearErrorMessage: () => void;
  children: ReactNode;
}

function InputContainer({
  id,
  type,
  placeholder,
  errorMessage: initialErrorMessage,
  onChange,
  clearErrorMessage: clearInitialErrorMessage,
  children,
}: InputContainerProps) {
  const { pathname: page } = useRouter();
  const [errorMessage, setErrorMessage] = useState(initialErrorMessage);

  const validateEmail = (e: FocusEvent<HTMLInputElement>) => {
    clearInitialErrorMessage();
    const { value } = e.target;
    if (!value) {
      setErrorMessage(ERROR_MESSAGES.email.emptyInput);
      return;
    }

    if (!validateEmailPattern(value)) {
      setErrorMessage(ERROR_MESSAGES.email.invalidInput);
      return;
    }

    setErrorMessage('');
  };

  const validatePassword = (e: FocusEvent<HTMLInputElement>) => {
    clearInitialErrorMessage();
    const { value } = e.target;
    if (!value) {
      setErrorMessage(ERROR_MESSAGES.password.emptyInput);
      return;
    }

    if (page === '/signup' && !validatePasswordPattern(value)) {
      setErrorMessage(ERROR_MESSAGES.password.invalidInput);
      return;
    }

    setErrorMessage('');
  };

  const onBlur = () => {
    if (type === 'email') return validateEmail;
    else if (type === 'password') return validatePassword;
  };

  useEffect(() => {
    if (!initialErrorMessage) return;
    setErrorMessage(initialErrorMessage);
  }, [initialErrorMessage]);

  return (
    <div className='flex flex-col gap-12pxr'>
      <label htmlFor={id} className=' text-14pxr font-normal'>
        {children}
      </label>
      <Input
        type={type}
        placeholder={placeholder}
        id={id}
        errorMessage={errorMessage}
        onChange={onChange}
        onBlur={onBlur()}
      />
    </div>
  );
}

export default InputContainer;
