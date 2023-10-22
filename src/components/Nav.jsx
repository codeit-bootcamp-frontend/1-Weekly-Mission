import '../css/nav.css';

function Nav() {
  return (
    <>
      <div className="gnb">
        <a href="index.html">
          <img className="logo" src="../assets/image/logo.svg" alt="홈으로 연결된 Linkbrary 로고" />
        </a>
        <div className="user-info">유저 정보</div>
      </div>
    </>
  );
}

export default Nav;
