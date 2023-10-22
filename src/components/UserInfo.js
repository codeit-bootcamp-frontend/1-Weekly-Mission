import defaultUserIcon from "../images/profile img.png";

const UserInfo = ({ userProfileImg = defaultUserIcon, userEmail }) => {
	return (
		<a href="/" className="header__user-info">
			<img src={userProfileImg} className="header__user-icon" alt="user" />
			<p className="header__user-email">{userEmail}</p>
		</a>
	);
};

export default UserInfo;
