function SNS({ alt, url, icon }) {
  const description = `${alt}페이지로 이동`;
  return (
    <a href={url}>
      <img src={icon} alt={description} />
    </a>
  );
}

export default SNS;
