import { isEmailValid } from '../utils';
import React, { useState } from 'react';
import styles from './EmailInput.module.scss';
import classNames from 'classnames';
const cx = classNames.bind(styles);

export const EmailInput = () => {
  const [value, setValue] = useState('');
  const isError = value !== '' && !isEmailValid(value);
  let classType = isError ? 'input-error' : 'input-default';
  console.log('classType', classType);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <input
      className={cx('inputField')}
      placeholder=""
      value={value}
      onChange={handleInputChange}
    />
  );
};
