import styled from "styled-components";

import useSignin from "@/hooks/useSignin";
import SocialLogin from "@/components/Member/SocialLogin";
import MemberTop from "@/components/Member/MemberTop";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";

const SigninContainer = () => {
  const { handleSubmit, onSubmit, register, errors } = useSignin();

  return (
    <StyledContainerBox>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <MemberTop text1="회원이 아니신가요?" text2="회원 가입하기" />
        <StyledOuterInputBox>
          <Input
            labelText="email"
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
          <Input
            labelText="password"
            register={register}
            errors={errors}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
          />
        </StyledOuterInputBox>
        <Button text="로그인" size="wide" buttonColor="blue" />
      </StyledForm>
      <SocialLogin text="소셜 로그인" />
    </StyledContainerBox>
  );
};

export default SigninContainer;

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
