import { useEffect, useState } from "react";
import getSample from "../../api";

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
    <>
      <img src={profileImage} alt = "프로필 사진"></img>
      <span>{email}</span>
    </>
  );

}

export default Profile;