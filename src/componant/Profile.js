import { getSampleFolder } from '../api.js';
import './Profile.css';

const {
  folder: { name, owner },
} = await getSampleFolder();

function Profile() {
  return (
    <header className="profile">
      <div className="profile__container">
        <div className="profile__ownerImage">
          <img src={owner.profileImageSource} alt="profile" />
        </div>
        <div className="profile__ownerName">@{owner.name}</div>
        <h2 className="profile__folderName">{name}</h2>
      </div>
    </header>
  );
}

export default Profile;
