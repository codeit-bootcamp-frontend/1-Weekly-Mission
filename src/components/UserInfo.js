import defaultUserIcon from "../images/profile img.png";

const UserInfo = ({ userEmail }) => {
	return (
		<a href="www.codeit.co.kr" className="header__user-info">
			<img src={defaultUserIcon} className="header__user-icon" alt="user" />
			<p className="header__user-email">{userEmail}</p>
		</a>
	);
};

export default UserInfo;
