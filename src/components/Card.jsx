function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}.`;
}

function calculatePassedTime(time) {
  return Date.now() - time;
}

function Card({ item, id }) {

  return (
    <>
      <div className='card-wrapper' key={item.id}>
        <div className='card-image-box'>
          <img className='card-image' src={item.imageSource} alt={item.title} />
          <span className='star-mark'>star</span>
        </div>
        <div className='card-info-box'>
          <div className='card-info-top'>
            <div className='card-passed-time'>{calculatePassedTime(item.createdAt)}</div>
            <button>
              <img src='/src/assets/image/kebab.svg' alt='' />
            </button>
          </div>
          <p>{item.description}</p>
          <div>{formatDate(item.createdAt)}</div>
        </div>
      </div>
    </>
  );
}

export default Card;
