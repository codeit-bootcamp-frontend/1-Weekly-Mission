import Image from 'next/image';
import style from './SignLayout.module.scss';
import classNames from 'classnames/bind';
import { LINK } from './constant';
import Link from 'next/link';
import { ReactNode } from 'react';

const cx = classNames.bind(style);

interface Props {
  page: 'signin' | 'signup';
  children: ReactNode;
}

export default function SignLayout({ page, children }: Props) {
  return (
    <div className={cx('container')}>
      <div className={cx('box')}>
        <header className={cx('header')}>
          <Image
            className={cx('logo')}
            width={210.583}
            height={38}
            src='images/linkbrary.svg'
            alt='로고'
            style={{ width: 'auto', height: 'auto' }}
            priority
          />
          <p className={cx('link-box')}>
            {LINK[page].div}
            <Link className={cx('link')} href={LINK[page].href}>
              {LINK[page].link}
            </Link>
          </p>
        </header>
      </div>
      {children}
    </div>
  );
}
