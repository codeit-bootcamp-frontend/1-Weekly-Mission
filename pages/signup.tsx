import Button from "@/components/button/Button";
import PasswordInput from "@/components/input/PasswordInput";
import UserLayout from "@/components/user/UserLayout";

const Signup = () => {
  const handleSignup = () => {
    console.log("signup");
  };

  return (
    <UserLayout
      inputItem={
        <>
          <PasswordInput
            label={"password"}
            placeholder={"영문, 숫자를 조합해 8자 이상 입력해 주세요."}
          />
          <PasswordInput
            label={"passwordConfirm"}
            placeholder={"비밀번호와 일치하는 값을 입력해 주세요"}
          />
        </>
      }
      buttonItem={
        <Button onClick={handleSignup} type="primary">
          회원가입
        </Button>
      }
      moveToPageItem={{
        title: "이미 회원이신가요?",
        href: "/signin",
        linkTitle: "로그인하기",
      }}
      socialLoginItemTitle="다른 방식으로 가입하기"
    />
  );
};

export default Signup;
