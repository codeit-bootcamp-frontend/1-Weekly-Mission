import { SignLayout } from '@/src/page-layout/SignLayout/SignLayout';
import Logo from '@/public/images/linkbrary.svg';
import styles from '@/src/page-layout/SignLayout/SignLayout.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { SnsLogin } from '@/src/sign/ui-sns/SnsLogin';
import { FormInput } from '@/src/sign/ui-form-input/FormInput';

const cx = classNames.bind(styles);

const Signin = () => {
  return (
    <SignLayout
      logo={
        <Link href="/">
          <Logo alt="홈으로 연결된 Linkbrary 로고" width={210} height={38} />
        </Link>
      }
      message={
        <p>
          회원이 아니신가요? <Link href="/signup">회원가입하기</Link>
        </p>
      }
      form={<FormInput label="이메일" type="text" />}
      sns={<SnsLogin />}
    />
  );
};

export default Signin;
