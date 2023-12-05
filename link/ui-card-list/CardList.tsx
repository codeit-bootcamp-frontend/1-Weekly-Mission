import { ReactNode, forwardRef } from 'react';
import styles from './CardList.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

// eslint-disable-next-line react/display-name
export const CardList = forwardRef<HTMLDivElement, { children: ReactNode }>(
  ({ children }, ref) => {
    return (
      <div ref={ref} className={cx('container')}>
        {children}
      </div>
    );
  }
);
