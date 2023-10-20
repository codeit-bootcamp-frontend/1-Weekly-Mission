function Card({ item }) {
  const { imageSource, createdAt, title, description } = item;
  return (
    <div>
      <img src={imageSource} alt="카드 이미지" />
      <p>{createdAt}</p>
      <p>{title}</p>
      <p>{description}</p>
    </div>
  );
}

export default Card;