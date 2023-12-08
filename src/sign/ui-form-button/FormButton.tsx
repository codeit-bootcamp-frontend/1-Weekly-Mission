import { ReactNode } from 'react';
import styles from '@/src/sign/ui-form-button/FormButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type FormButtonProps = {
  children: ReactNode;
};

export const FormButton = ({ children }: FormButtonProps) => {
  return <div className={cx(styles.container)}>{children}</div>;
};
