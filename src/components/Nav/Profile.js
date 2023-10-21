import './Profile.css'

function Profile({ email, profileIamgeSource: img }) {
  return (
    <div className="profile grid--sign">
      <img className='profile__img' src={img} alt="프로필 사진" />
      <span className="profile__email margin-left10">{email}</span>
    </div>
  )
}

export default Profile