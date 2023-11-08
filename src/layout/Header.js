import "../styles/header.css";

function Header({ userData = {} }) {
  const userEmail = userData?.email;
  const profileImgSrc = userData?.profileImageSource;

  return (
    <header>
      <nav className="gnb">
        <div className="gnb__container">
          <h1 className="logo">
            <a href="/">
              <img
                className="logo__img"
                src="/images/logo.svg"
                alt="Linkbrary 로고"
              />
            </a>
          </h1>
          {!userEmail ? (
            <a className="btn btn--short" href="signin.html">
              로그인
            </a>
          ) : (
            <div className="profile">
              <img
                className="profile__img"
                src={profileImgSrc}
                alt="유저 프로필 이미지"
              />
              <span className="profile__email">{userEmail}</span>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
