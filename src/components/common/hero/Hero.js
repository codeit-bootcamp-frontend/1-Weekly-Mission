import style from "./Hero.module.css";

export default function Hero({ folder, profile }) {
  return (
    <>
      <div className={style.wrapper}>
        <img src={profile?.profileImageSource} alt="avatar" className={style.profileImage} />
        <p className={style.profileName}>{profile?.name}</p>
      </div>
      <h2 className={style.title}>{folder}</h2>
    </>
  );
}
