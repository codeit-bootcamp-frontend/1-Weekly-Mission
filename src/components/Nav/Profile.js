import { useEffect, useState } from "react";
import getSample from "../../api";

import '../../style/style.css';
import './Profile.css';

function Profile() {
  const [email, setEmail] = useState('');
  const [profileImage, setProfileImage] = useState('');

  const getSampleUser = async () => {
    const result = await getSample('user');

    const { email, profileImageSource } = result;

    setEmail(email);
    setProfileImage(profileImageSource);
  }

  useEffect(() => getSampleUser)

  return (
    <div className="Profile">
      <img src={profileImage} className = 'profile-img' alt = "프로필 사진"></img>
      <span className="flex-center">{email}</span>
    </div>
  );

}

export default Profile;