import '../css/nav.css';

function Nav({ userProfileLoadingError }) {
  return (
    <div className="nav-wrapper">
      <div className="gnb">
        <a href="index.html">
          <img className="logo" src="../assets/image/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <div className="user-info">
          {userProfileLoadingError?.message && <span>{userProfileLoadingError.message}</span>}}
        </div>
      </div>
    </div>
  );
}

export default Nav;
