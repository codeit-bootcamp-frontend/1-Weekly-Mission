import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import { ROUTE } from '../util';
import Link from 'next/link';
import { TEXT } from './constant';
import { forwardRef } from 'react';
import { LinkForm } from '@/link/ui-link-form/LinkForm';

const cx = classNames.bind(styles);

export const Footer = forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref} className={cx('container')}>
      <div className={cx('items')}>
        <span className={cx('copyright')}>{TEXT.codeit}</span>
        <div className={cx('links')}>
          <Link href={ROUTE.개인정보처리방침}>
            <a className={cx('link')}>{TEXT.privacyPolicy}</a>
          </Link>
          <Link href={ROUTE.FAQ}>
            <a className={cx('link')}>{TEXT.faq}</a>
          </Link>
        </div>
        <div className={cx('sns')}>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/facebook.svg"
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/twitter.svg"
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/youtube.svg"
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="images/instagram.svg"
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = 'Footer';

export default Footer;
