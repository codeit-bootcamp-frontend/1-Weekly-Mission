import Link from 'next/link';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './SocialAuth.module.css';

const cx = classNames.bind(styles);

export type SocialAuthText = '소셜 로그인' | '다른 방식으로 가입하기';

interface SocialAuthProps {
  text: SocialAuthText;
}

export default function SocialAuth({ text }: SocialAuthProps) {
  return (
    <div className={cx('container')}>
      {text}
      <div className={cx('icons')}>
        <Link href="https://www.google.com">
          <div className={cx('circle', 'border', 'bg-white')}>
            <Image
              src={'/images/google.png'}
              alt={'Google icon'}
              width="22"
              height="22"
            />
          </div>
        </Link>
        <Link href="https://www.kakaocorp.com/page">
          <div className={cx('circle', 'bg-yellow')}>
            <Image
              src={'/images/kakaotalk.svg'}
              alt={'KakaoTalk icon'}
              width="22"
              height="22"
            />
          </div>
        </Link>
      </div>
    </div>
  );
}
