import "./Profile.css";

function Profile({ data }) {
  const { name, email, profileImageSource } = data;

  return (
    <div className="profile">
      <img className="image" src={profileImageSource} alt={name}></img>
      <p className="email">{email}</p>
    </div>
  );
}

export default Profile;
