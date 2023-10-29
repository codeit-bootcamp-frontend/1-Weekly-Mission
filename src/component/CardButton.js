import addImg from '../assets/add.svg'

const BUTTON_NAME = ['전체', '유용한 글', '⭐️ 즐겨찾기', '채용 사이트', '코딩 팁', '나만의 장소' ]

export function CardButton({onClick, query}){

  const handleClick = () => {
    const buttonQuery = `folder_id=${query}`
    return onClick(buttonQuery)
  }

  return(
    <div className="card-button-box">
      <ul className='card-button'>
        {BUTTON_NAME.map((button) =>
          <li><button className='list-button' onClick={handleClick}>{button}</button></li>
        )}
      </ul>
      <span>폴더 추가<img src={addImg} alt='폴더추가'></img></span>
    </div>
  )
}
