export default function Profile(data) {
  return (
    <div className="nav1-div">
      <div className="nav1-div-logo">
        <img
          className="nav1-humanImg"
          src={data.item.profileImageSource}
          alt="profileImg"
        />
      </div>
      <div className="nav1-div-mail">{data.item.email}</div>
    </div>
  );
}
