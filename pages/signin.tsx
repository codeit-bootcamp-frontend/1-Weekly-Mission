import Button from "@/components/button/Button";
import EmailInput from "@/components/input/EmailInput";
import PasswordInput from "@/components/input/PasswordInput";
import UserLayout from "@/components/user/UserLayout";

const Signin = () => {
  const handleSignin = () => {
    console.log("signin");
  };

  return (
    <UserLayout
      buttonItem={
        <Button onClick={handleSignin} type="primary">
          로그인
        </Button>
      }
      moveToPageItem={{
        title: "회원이 아니신가요?",
        href: "/signup",
        linkTitle: "회원 가입하기",
      }}
      socialLoginItemTitle="소셜 로그인"
      inputs={
        <>
          <EmailInput />
          <PasswordInput
            label={"password"}
            placeholder={"비밀번호를 입력해주세요"}
          />
        </>
      }
    />
  );
};

export default Signin;
