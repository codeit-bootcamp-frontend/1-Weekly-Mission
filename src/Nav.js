import logoImg from "./image/logo.png";

export function Nav({ profile }) {
  return (
    <div className="nav">
      <img src={logoImg} alt="logo"></img>
      <div className="nav-inform">
        <img src={profile.src} alt="profile"></img>
        <span>{profile.email}</span>
      </div>
    </div>
  );
}
