export default function Profile(data) {
  return (
    <div className="nav1-div">
      <div className="nav1-div-logo">
        {data.item.id ? (
          <img
            className="nav1-humanImg"
            src={data.item.profileImageSource}
            alt="profileImg"
          />
        ) : (
          <img
            className="nav1-humanImg"
            src={data.item[0].image_source}
            alt="profileImg"
          />
        )}
      </div>
      {data.item.id ? (
        <div className="nav1-div-mail">{data.item.email}</div>
      ) : (
        <div className="nav1-div-mail">{data.item[0].email}</div>
      )}
    </div>
  );
}
