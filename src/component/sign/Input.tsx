import { ReactElement, useEffect, useState } from 'react';
import { InputProps } from '@/types/Component';
import useToggle from '@/src/hooks/useToggle';
import useInput from '@/src/hooks/useInput';
import { IconEyeON, IconEyeOff } from '@/public/svgs';
import styles from './Input.module.css';

export default function Input({ type, onBlur }: InputProps): ReactElement {
  const { isOn, toggle } = useToggle(false);
  const { value, handleInputChange } = useInput('');
  const [showError, setShowError] = useState(false);
  const [error, setError] = useState('내용을 다시 작성해주세요');

  return (
    <>
      <div className={styles.Container}>
        <input
          className={styles.Input}
          placeholder="내용 입력"
          value={value}
          type={isOn ? 'text' : 'password'}
          onChange={handleInputChange}
          onBlur={onBlur}
        />
        {isOn
          ? type === 'password' && <IconEyeON onClick={toggle} />
          : type === 'password' && <IconEyeOff onClick={toggle} />}
      </div>
      {showError && <span className={styles.Error}>{error}</span>}
    </>
  );
}
