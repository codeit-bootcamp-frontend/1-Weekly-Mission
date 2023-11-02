import linkClickImg from '../assets/link.svg';

export function Header({items}) {
  const className = `header-section ${items ? 'user' : 'folder'}`

  return (
    <div className={className}>
      {items && (<><div className="profile">
        <img src={items.owner.profileImageSource} alt="profile"></img>
        <span className="user-name">{items.owner.name}</span>
      </div>
      <p className="title">{items.name}</p></>)}
      {!items &&(<div className='link-search-box'>
        <div className='link-box'>
          <div className='link-input-box'>
            <img src={linkClickImg} alt='링크아이콘'></img>
            <input type='text' placeholder='링크를 추가해 보세요'></input>
          </div>
          <button>추가하기</button>
        </div>
      </div>)}
    </div>
  );
}
