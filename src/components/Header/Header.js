function Header({name , owner}){
  // const {name, profileImageSource} = owner;

  console.log(name);
  return(
    <>
    <span>{name}</span>
    <span>{owner.name}</span>
    <img src={owner.profileImageSource} alt = "소유자 사진"></img>
    </>
  )
}

export default Header;