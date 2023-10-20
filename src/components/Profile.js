import "./Profile.css";

function Profile({ email, image }) {
  return (
    <div className="profile">
      <img className="image" src={image} alt="프로필 이미지"></img>
      <p>{email}</p>
    </div>
  );
}

export default Profile;
