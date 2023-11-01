import * as Styled from "./StyledLoginBtn";

const LoginButton = ({ isLogin, data }) => {
  const { email, imageSource } = data;

  return (
    <>
      {isLogin ? (
        <Styled.LoginBox>
          <Styled.LoginImgBg>
            <Styled.LoginImg
              src={imageSource}
              alt="프로필 사진"
            ></Styled.LoginImg>
          </Styled.LoginImgBg>
          <Styled.LoginEmail className="loginEmail">{email}</Styled.LoginEmail>
        </Styled.LoginBox>
      ) : (
        <Styled.LoginBtn size="short" href="/">
          <span>로그인</span>
        </Styled.LoginBtn>
      )}
    </>
  );
};

export default LoginButton;
