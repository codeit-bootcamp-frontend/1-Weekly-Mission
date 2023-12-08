import { ReactNode } from 'react';
import styles from './SignLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type SignLayoutProps = {
  logo: ReactNode;
  message: ReactNode;
  form: ReactNode;
  sns: ReactNode;
};

export const SignLayout = ({ logo, message, form, sns }: SignLayoutProps) => {
  return (
    <div className={cx('layout')}>
      <div className={cx('container')}>
        <div className={cx('navigator')}>
          {logo}
          {message}
        </div>
        <div className={cx('form')}>{form}</div>
        <div className={cx('sns')}>{sns}</div>
      </div>
    </div>
  );
};
