import Link from 'next/link';
import styles from '@/src/sign/ui-sns/SnsLogin.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';

const cx = classNames.bind(styles);

export const SnsLogin = () => {
  return (
    <div className={cx('sns-box')}>
      <span className={cx('sns-text')}>소셜 로그인</span>
      <div className={cx('sns-links')}>
        <Link className={cx('sns-link', 'google-link')} href="https://www.google.com/">
          <Image src="/images/google.png" width={22} height={22} />
        </Link>
        <Link className={cx('sns-link', 'kakao-link')} href="https://www.kakaocorp.com/page/">
          <Image src="/images/kakao.svg" width={22} height={22} />
        </Link>
      </div>
    </div>
  );
};
