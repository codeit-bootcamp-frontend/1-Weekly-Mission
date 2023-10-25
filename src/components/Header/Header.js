import defaultAvatar from '../../assets/Avatar.png'
import './Header.css'

function Header({ name = '', owner = {} }) {
  return (
    <header className='header'>
      <div className='user' >
        <div className='user__box'>
          <img className='user__img' src={owner.profileImageSource ?? defaultAvatar} alt='유저 프로필 이미지' />
          <p className='user__name'>{owner.name}</p>
        </div>
        <h1 className='user__folder-name'>{name}</h1>
      </div>
    </header>
  )
}

export default Header