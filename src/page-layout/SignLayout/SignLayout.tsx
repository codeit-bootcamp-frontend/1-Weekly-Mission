import { ReactNode } from 'react';
import styles from './SignLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type SignLayoutProps = {
  navigator: ReactNode;
  form: ReactNode;
  sns: ReactNode;
};

export const SignLayout = ({ navigator, form, sns }: SignLayoutProps) => {
  return (
    <div className={cx('container')}>
      <div className={cx('navigator')}>{navigator}</div>
      <div className={cx('form')}>{form}</div>
      <div className={cx('sns')}>{sns}</div>
    </div>
  );
};
