export function HeadSection({ items }) {
  return (
    <div className="header-section">
      <div className="profile">
        <img src={items.owner.profileImageSource} alt='profile'></img>
        <span className="user-name">{items.owner.name}</span>
      </div>
      <p className='title'>{items.name}</p>
    </div>
  );
}
