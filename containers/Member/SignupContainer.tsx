import styled from "styled-components";

import useSignup from "@/hooks/useSignup";
import SocialLogin from "@/components/Member/SocialLogin";
import MemberTop from "@/components/Member/MemberTop";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

const SignupContainer = () => {
  const { handleSubmit, onSubmit, register, errors } = useSignup();
  return (
    <StyledContainerBox>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <MemberTop text1="이미 회원이신가요?" text2="로그인 하기" />
        <StyledOuterInputBox>
          <Input labelText="email" register={register} errors={errors} />
          <Input labelText="password" register={register} errors={errors} />
          <Input
            labelText="passwordConfirm"
            register={register}
            errors={errors}
          />
        </StyledOuterInputBox>
        <Button text="회원가입" size="wide" buttonColor="blue" />
      </StyledForm>
      <SocialLogin text="다른 방식으로 가입하기" />
    </StyledContainerBox>
  );
};

export default SignupContainer;

const StyledContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;

  width: 400px;
`;

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const StyledOuterInputBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
