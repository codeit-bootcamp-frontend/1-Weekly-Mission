function Banner({ info }) {
  const { name: folderName, owner } = info;
  const { name: ownerName, profileImageSource } = owner;
  return (
    <div className='banner'>
      <img
        src={profileImageSource}
        alt='폴더 유저 프로필 이미지'
        className='banner__img'
      />
      <div className='banner__owner-name'>{`@${ownerName}`}</div>
      <h1 className='banner__title'>{folderName}</h1>
    </div>
  );
}

export default Banner;
