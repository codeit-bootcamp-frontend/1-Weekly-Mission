import "./Hero.css";

export default function Hero({ folder, profile }) {
  return (
    <>
      <div className="hero__profile">
        <img src={profile?.profileImageSource} alt="avatar" className="hero__profile__image" />
        <p className="hero__profile__name">{profile?.name}</p>
      </div>
      <h2 className="hero__title">{folder}</h2>
    </>
  );
}
