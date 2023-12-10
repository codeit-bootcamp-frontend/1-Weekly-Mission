import { ReactNode } from 'react';
import classNames from 'classnames/bind';
import styles from './AuthFormLayout.module.css';
import SocialAuth from '@/src/component/sign-in/ui-social-auth/SocialAuth';
import { Logo } from '@/public/images';
import Link from 'next/link';
import { SocialAuthText } from '@/src/component/sign-in/ui-social-auth/SocialAuth';

const cx = classNames.bind(styles);
interface HeaderMessage {
  message: '회원이 아니신가요?' | '이미 회원이신가요?';
  linkMessage: '회원가입하기' | '로그인하기';
  path: '/signup' | '/signin';
}
interface AuthFormLayoutProp {
  headerMessage: HeaderMessage;
  children: ReactNode;
  socialMessage: SocialAuthText;
}

export default function AuthFormLayout({
  headerMessage,
  children,
  socialMessage,
}: AuthFormLayoutProp) {
  return (
    <div className={cx('bg')}>
      <div className={cx('container')}>
        <Logo width="210.6" height="38" />
        <div className={cx('header-message')}>
          {headerMessage.message}
          <Link className={cx('link')} href={headerMessage.path}>
            {headerMessage.linkMessage}
          </Link>
        </div>
        {children}
        <SocialAuth text={socialMessage} />
      </div>
    </div>
  );
}
