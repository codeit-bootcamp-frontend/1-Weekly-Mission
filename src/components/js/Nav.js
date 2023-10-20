import logoImg from '../../Assets/logo.svg'
import profileImg from  '../../Assets/profile.svg'

function Profile() {
  return(
    <div>
      <img src={profileImg} alt={profileImg}/>
      <p>Codeit@codeit.com</p>
    </div>
  )
}


function Nav(){
  return (
    <div>
      <img src={logoImg} alt={logoImg}/>
      <Profile />
    </div>
  );
};

export default Nav;