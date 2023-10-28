import './Profile.css'

function Profile({ email, profileImg }) {
  return (
    <div className="profile grid--sign">
      <img className='profile__img' src={profileImg} alt="프로필 사진" />
      <span className="profile__email margin-left10">{email}</span>
    </div>
  )
}

export default Profile