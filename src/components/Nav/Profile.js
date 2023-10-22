// import { useEffect, useState } from "react";
// import getSample from "../../api";

import '../../style/style.css';
import './Profile.css';

function Profile({email, profileImage}) {

  return (
    <div className="Profile">
      <img src={profileImage} className = 'profile-img' alt = "프로필 사진"></img>
      <span className="flex-center">{email}</span>
    </div>
  );

}

export default Profile;