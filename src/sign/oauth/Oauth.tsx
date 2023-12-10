import classNames from 'classnames/bind';
import styles from './Oauth.module.scss';
import Image from 'next/image';
import google from '@/public/images/google.png';
import kakao from '@/public/images/kakao.png';
import Link from 'next/link';

const cx = classNames.bind(styles);

interface Props {
  page: string;
}

interface Text {
  [key: string]: string;
}

const text: Text = {
  signin: '소셜 로그인',
  signup: '다른 방식으로 가입하기',
};

export default function Oauth({ page }: Props) {
  return (
    <div className={cx('container')}>
      <div className={cx('text')}>{text[page]}</div>
      <div className={cx('box')}>
        <Link href='https://www.google.com'>
          <Image src={google} alt='소셜 구글' width={42} height={42} />
        </Link>
        <Link href='https://www.kakaocorp.com/page'>
          <Image src={kakao} alt='소셜 구글' width={42} height={42} />
        </Link>
      </div>
    </div>
  );
}
