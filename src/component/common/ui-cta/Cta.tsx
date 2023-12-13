import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './Cta.module.css';

const cx = classNames.bind(styles);

interface CtaProps {
  children: ReactNode;
}

export default function ({ children }: CtaProps) {
  return <div className={cx('box')}>{children}</div>;
}
