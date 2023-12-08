import { SignLayout } from '@/src/page-layout/SignLayout/SignLayout';
import Logo from '@/public/images/linkbrary.svg';
import styles from '@/src/page-layout/SignLayout/SignLayout.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cx = classNames.bind(styles);

const Signin = () => {
  return (
    <SignLayout
      logo={
        <Link href="/">
          <Logo className={cx(styles.logo)} alt="홈으로 연결된 Linkbrary 로고" />
        </Link>
      }
      message={
        <p>
          회원이 아니신가요? <Link href="/signup">회원가입하기</Link>
        </p>
      }
      form={'폼'}
      sns={'버튼들'}
    />
  );
};

export default Signin;
