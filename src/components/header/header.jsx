import "./header.css";
import logoImgSource from "../../assets/icons/logo.svg";

export default function HeaderComponent({ email }) {
	return (
		<header className="header">
			<nav className="header__nav" role="navigation">
				<button className="header__home-button">
					<img
						src={logoImgSource}
						alt="링크브러리 로고 이미지"
						aria-label="링크브러리 로고"
						width="133"
					/>
				</button>

				{email ? (
					<button className="header__profile-button">
						<img
							className="profile-image"
							src={""} // TODO
							alt="프로필 아이콘"
							width="28"
							height="28"
						/>
						<p className="profile-email">{email}</p>
					</button>
				) : (
					<button className="header__signin-button">로그인</button>
				)}
			</nav>
		</header>
	);
}
