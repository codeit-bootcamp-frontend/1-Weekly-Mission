export default function CardItem({ link }) {
  const { title, description, imageSource, createdAt } = link;
  return (
    <a>
      <article>
        <div>이미지</div>
        <div className="item">
          <p>10 minutes ago</p>
          <img src={imageSource} />
          <p>{title}</p>
          <p>{description}</p>
          <p>{createdAt}</p>
        </div>
      </article>
    </a>
  );
}
