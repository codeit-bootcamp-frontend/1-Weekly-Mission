import style from "./Header.module.css";
import logo from "assets/logo.svg";

export default function Header({ user }) {
  return (
    <header className={style.wrapper}>
      <div className={style.container}>
        <img src={logo} alt="logo" className={style.logo} />
        <nav>
          {user ? (
            <div className={style.navbar}>
              <img src={user?.profileImageSource} className={style.profileImage} />
              <span className={style.profileEmail}>{user?.email}</span>
            </div>
          ) : (
            <button className={style.button}>로그인</button>
          )}
        </nav>
      </div>
    </header>
  );
}
