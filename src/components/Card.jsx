function Card() {

  return (
    <>
      <div className="card-wrapper">
        <div className="card-image-box">
          <img className="card-image" src='' alt='카드 이미지' />
          <span className="star-mark">star</span>
        </div>
        <div className="card-info-box">
          <div>
            <div>nowDate - createdAt</div>
            <span>점표(...)</span>
          </div>
          <p>Paragraph</p>
          <div>createdAt</div>
        </div>
      </div>
    </>
  );
}

export default Card;
