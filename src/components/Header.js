import logoImg from "../images/logo.svg";
import UserInfo from "./UserInfo";

const Header = ({ isLogin, userEmail }) => {
	return (
		<header className="header">
			<div className="header__inner">
				<a href="www.codeit.co.kr" className="header__logo-link">
					<img className="header__logo" src={logoImg} alt="Linkbrary" />
				</a>
				{isLogin ? (
					<UserInfo userEmail={userEmail} />
				) : (
					<a className="button" href="/user/signin">
						로그인
					</a>
				)}
			</div>
		</header>
	);
};

export default Header;
