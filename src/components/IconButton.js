function IconButton({ link: { href, iconUrl, alt, target } }) {
  return (
    <a href={href} target={target}>
      <img src={iconUrl} alt={alt} />
    </a>
  );
}

export default IconButton;
