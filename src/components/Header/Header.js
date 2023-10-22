function Header({name , owner}){
  // const {name, profileImageSource} = owner;
  if (!name || !owner) {
    return null; // 데이터가 없을 때 아무것도 렌더링하지 않음
  }
  
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