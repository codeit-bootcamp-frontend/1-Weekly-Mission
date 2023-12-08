import Link from 'next/link';
import styles from '@/src/sign/ui-sns/SnsLogin.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export const SnsLogin = () => {
  return (
    <div className={cx('sns_box')}>
      <span className={cx('ns_text')}>소셜 로그인</span>
      <div className={cx('sns_links')}>
        <Link className={cx('sns_link', 'google_link')} href="https://www.google.com/">
          <img src="/images/google.png" />
        </Link>
        <Link className={cx('sns_link', 'kakao_link')} href="https://www.kakaocorp.com/page/">
          <img src="/images/kakao.svg" />
        </Link>
      </div>
    </div>
  );
};
