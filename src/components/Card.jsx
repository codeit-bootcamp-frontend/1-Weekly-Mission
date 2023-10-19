function Card() {

  return (
    <>
      <div className="card-wrapper">
        <div>
          <img src='' alt='카드 이미지' />
          <span>star</span>
        </div>
        <div>
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
