function Card({ data }) {
  const { url, title, description, createdAt, imageSource } = data;
  return (
    <a href={url}>
      <img src={imageSource} />
      <div>{title}</div>
      <div>{description}</div>
    </a>
  );
}

export default Card;
