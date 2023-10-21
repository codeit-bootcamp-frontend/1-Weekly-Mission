function Banner({ info }) {
  const { name, owner } = info;
  return (
    <header>
      <img src={owner.profileImageSource} />
      <div>{`@${owner.name}`}</div>
      <h1>{name}</h1>
    </header>
  );
}

export default Banner;
