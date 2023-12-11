import SigninFooter from '@/components/sign/SignFooter';
import SigninHeader from '@/components/sign/SignHeader';
import { SignFooterMsg, SignHeaderMsg } from '@/constant/constants';
import { SigninWrapper, Div } from './signup';

export default function Signup() {
  return (
    <SigninWrapper>
      <Div>
        <SigninHeader
          text={SignHeaderMsg.isMember}
          linktext={SignHeaderMsg.goSignin}
        />
        <SignupMain />
        <SignupMain />
      </Div>
      <SigninFooter text={SignFooterMsg.anotherSignup} />
    </SigninWrapper>
  );
}
