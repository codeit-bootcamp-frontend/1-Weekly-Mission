import logoImg from "../assets/logo.png";

export function Nav({user}) {
  const {email, image_source} = user || {};

  return (
    <div className="nav">
      <img src={logoImg} alt="logo"></img>
      <div className="nav-inform">
        {image_source && <img src={image_source} alt="profile"></img>}
        {email ? <span>{email}</span> :<a href='/login'>로그인</a>}
      </div>
    </div>
  );
}
