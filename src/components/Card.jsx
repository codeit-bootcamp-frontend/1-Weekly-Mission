function Card() {

  return (
    <>
      <div className="card-wrapper">
        <div className="card-image-box">
          <img className="card-image" src='' alt='카드 이미지' />
          <span className="star-mark">star</span>
        </div>
        <div className="card-info-box">
          <div className="card-info-top">
            <div className="card-passed-time">nowDate - createdAt</div>
            <button>
              <img src='/src/assets/image/kebab.svg' alt='' />
            </button>
          </div>
          <p>Paragraph</p>
          <div>createdAt</div>
        </div>
      </div>
    </>
  );
}

export default Card;
