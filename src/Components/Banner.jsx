function Banner({ info }) {
  const { name: folderName, owner } = info;
  const { name: ownerName, profileImageSource } = owner;
  return (
    <div>
      <img src={profileImageSource} alt='폴더 유저 프로필 이미지' />
      <div>{`@${ownerName}`}</div>
      <h1>{folderName}</h1>
    </div>
  );
}

export default Banner;
