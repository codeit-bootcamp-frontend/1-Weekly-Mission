import './Header.css';
import '../../globalStyles.css'

const Header = ( {folder} ) => {
  const {folderTitle, owner} = folder;
  const {profileImageSource, name} = owner;

  return (
    <header>
      <div className='owner-info'>
        <img className="profile-image" src={profileImageSource} alt="폴더 제작자 프로필 이미지"/>
        <p className="name">{name}</p>
      </div>
      <h1 className="folder-title">{folderTitle}</h1>
    </header>
  )
}

export default Header;
