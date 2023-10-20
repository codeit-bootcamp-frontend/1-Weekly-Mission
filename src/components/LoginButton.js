import ProfileInfo from "./ProfileInfo";

const LoginButton = ({ userData, isLoading, onClick }) => {
  return (
    <div className="LoginButton">
      {userData ? (
        <ProfileInfo userData={userData} />
      ) : (
        <button disabled={isLoading} className="cta cta-short" onClick={onClick}>
          로그인
        </button>
      )}
    </div>
  );
};

export default LoginButton;
