import { useState, useEffect } from 'react';
import defaultProfileImg from '../assets/images/default-profile.svg';

function Profile({ user }) {
  const { email, profileImageSource, image_source } = user;
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  });

  return (
    <div className="profile">
      <img className="profile_img" src={profileImageSource || image_source || defaultProfileImg} alt="프로필 사진" />
      {innerWidth < 768 ? null : <div className="profile_email">{email}</div>}
    </div>
  );
}

export default Profile;
