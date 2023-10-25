import { useState, useEffect } from 'react';
import defaultProfileImg from '../assets/images/default-profile.svg';

function Profile({ user }) {
  const { email, profileImageSource } = user;
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="profile">
      <img className="profile_img" src={profileImageSource || defaultProfileImg} alt="프로필 사진" />
      {resize < 768 ? null : <div className="profile_email">{email}</div>}
    </div>
  );
}

export default Profile;
