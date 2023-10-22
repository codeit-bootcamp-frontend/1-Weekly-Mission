import logoImg from "../images/logo.svg";
import UserInfo from "./UserInfo";

const Header = ({ isLogin, userInfo }) => {
	const { email, profileImageSource } = userInfo;
	return (
		<header className="header">
			<div className="header__inner">
				<a href="/" className="header__logo-link">
					<img className="header__logo" src={logoImg} alt="Linkbrary" />
				</a>
				{isLogin ? (
					<UserInfo userEmail={email} userProfileImg={profileImageSource} />
				) : (
					<a className="button" href="/">
						로그인
					</a>
				)}
			</div>
		</header>
	);
};

export default Header;
