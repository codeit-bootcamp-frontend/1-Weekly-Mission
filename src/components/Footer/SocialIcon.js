
function SocialIcon({ link, imageSource, altText }) {
  return (
    <a href={link}>
      <img src={imageSource} alt={altText} />
    </a>
  );
}

export default SocialIcon;
