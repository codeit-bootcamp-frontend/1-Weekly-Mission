import SigninFooter from '@/components/sign/SignFooter';
import SigninHeader from '@/components/sign/SignHeader';
import SigninMain from '@/components/sign/SignMain';
import { SignFooterMsg, SignHeaderMsg } from '@/constant/constants';
import styled from 'styled-components';

export default function Signin() {
  return (
    <SigninWrapper>
      <Div>
        <SigninHeader
          text={SignHeaderMsg.noMember}
          linktext={SignHeaderMsg.goSignup}
        />
        <SigninMain />
      </Div>
      <SigninFooter text={SignFooterMsg.socialLogin} />
    </SigninWrapper>
  );
}

const SigninWrapper = styled.div`
  display: flex;
  background: #f0f6ff;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  align-items: center;
  padding: 238px 0px 252px 0px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
