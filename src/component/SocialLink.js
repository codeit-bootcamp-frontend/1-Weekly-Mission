function SocialLink({ link: { href, iconUrl, description } }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={iconUrl} alt={description} />
    </a>
  );
}
export default SocialLink;
