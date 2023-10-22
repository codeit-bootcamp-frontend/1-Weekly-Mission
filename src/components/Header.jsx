import '../css/header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-info">
        <img className="header-avatar" alt="avatar" />
        <span className="header-user-name">이름</span>
      </div>
      <span className="header-folder-name">폴더명</span>
    </div>
  );
}

export default Header;
