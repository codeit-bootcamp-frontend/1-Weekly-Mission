import "../style/LoginButton.css";

const LoginButton = ({ className, isLogin, data }) => {
  const [email, profileImageSource] = data;
  const [cta, ctaShort] = className;

  return (
    <>
      {isLogin ? (
        <div className="loginDiv">
          <img
            className="loginImage"
            src={profileImageSource}
            alt="프로필 사진"
          ></img>
          <span className="loginEmail">{email}</span>
        </div>
      ) : (
        <a className={`${cta} ${ctaShort}`} href="/">
          <span>로그인</span>
        </a>
      )}
    </>
  );
};

export default LoginButton;
