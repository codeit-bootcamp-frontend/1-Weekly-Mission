import style from "./Header.module.css";
import logo from "assets/logo.svg";

export default function Header({ user, isLoading }) {
  return (
    <header className={style.wrapper}>
      <div className={style.container}>
        <img src={logo} alt="logo" className={style.logo} />
        <nav>
          {isLoading ? (
            <button className={style.button}>로그인</button>
          ) : (
            <div className={style.navbar}>
              <img src={user?.profileImageSource} className={style.profileImage} />
              <span className={style.profileEmail}>{user?.email}</span>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
