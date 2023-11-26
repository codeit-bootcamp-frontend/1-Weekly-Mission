import "../assets/css/ProfileImg.css";

function ProfileImg({ src }) {
  return (
    <div className="box">
      <img className="profile" src={src} alt="profile" />
    </div>
  );
}

export default ProfileImg;
