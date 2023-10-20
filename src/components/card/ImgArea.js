import starIcon from './star.svg';

const ImgArea = ( { src } ) => {
  return (
    <>
      <img className="star-icon" src={starIcon} alt="즐겨찾기 등록 버튼" />
      <img className="card-img" src={src} alt="고양이 사진" />
    </>
  )
}

export default ImgArea;