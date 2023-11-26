import '../css/nav.css';
import UserProfile from './UserProfile';

function Nav({ userProfile, userProfileLoadingError }) {
  return (
    <div className="nav-wrapper">
      <div className="gnb">
        <a href="index.html">
          <img className="logo" src="../assets/image/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <UserProfile userProfile={userProfile} />
        {userProfileLoadingError?.message && <span>{userProfileLoadingError.message}</span>}
      </div>
    </div>
  );
}

export default Nav;
