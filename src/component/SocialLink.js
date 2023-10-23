function SocialLink({ link }) {
  return (
    <a href={link.href} target="_blank" rel="noopener noreferrer">
      <img src={link.iconUrl} alt={link.description} />
    </a>
  );
}
export default SocialLink;
