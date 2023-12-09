import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './AuthFormLayout.module.css';

const cx = classNames.bind(styles);

interface AuthFormLayoutProp {
  children: ReactNode;
}

export default function AuthFormLayout({ children }: AuthFormLayoutProp) {
  return <div className={cx('container')}>{children}</div>;
}
