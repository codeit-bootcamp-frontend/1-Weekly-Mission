import "../assets/css/ProfileImg.css";

function ProfileImg({ src }) {
  return (
    <div className="box">
      <img className="profile" src={src} />
    </div>
  );
}

export default ProfileImg;
