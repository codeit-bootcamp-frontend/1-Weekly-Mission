function Profile({user}){
    const {email, profileImageSource} = user;

    return (
        <div className = "profile">
            <img className = "profile_img" src = {profileImageSource} alt = "프로필 사진"/>
            <div>{email}</div>
        </div>
    );
}

export default Profile;