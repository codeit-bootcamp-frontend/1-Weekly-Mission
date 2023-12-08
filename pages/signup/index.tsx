import { SignLayout } from '@/src/page-layout/SignLayout/SignLayout';
import Logo from '@/public/images/linkbrary.svg';
import styles from '@/src/page-layout/SignLayout/SignLayout.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { SnsLogin } from '@/src/sign/ui-sns/SnsLogin';
import { FormInput } from '@/src/sign/ui-form-input/FormInput';
import { FormButton } from '@/src/sign/ui-form-button/FormButton';

const cx = classNames.bind(styles);

const Signup = () => {
  const handelSubmit = () => {};
  return (
    <SignLayout
      logo={
        <Link href="/">
          <Logo alt="홈으로 연결된 Linkbrary 로고" width={210} height={38} />
        </Link>
      }
      message={
        <p>
          이미 회원이신가요? <Link href="/signin">로그인하기</Link>
        </p>
      }
      form={
        <form onSubmit={handelSubmit}>
          <FormInput label="이메일" type="text" />
          <FormInput label="비밀번호" type="password" />
          <FormInput label="비밀번호 확인" type="password" />
          <button>
            <FormButton>로그인</FormButton>
          </button>
        </form>
      }
      sns={<SnsLogin />}
    />
  );
};

export default Signup;
