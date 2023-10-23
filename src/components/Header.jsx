import '../css/header.css';

function Header({ folder }) {
  // const { avatar = '', ownerName = '', folderName = '' } = folder;
  return (
    <div className="header">
      <div className="header-info">
        <img className="header-avatar" src={folder.avatar || ''} alt="avatar" />
        <span className="header-user-name">{folder.ownerName || ''}</span>
      </div>
      <span className="header-folder-name">{folder.folderName || ''}</span>
    </div>
  );
}

export default Header;
