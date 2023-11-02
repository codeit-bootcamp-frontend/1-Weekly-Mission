const CardContent = ({ children, url }) => {
  return (
    <a className="card_content" href={url}>
      {children}
    </a>
  );
};

export default CardContent;
