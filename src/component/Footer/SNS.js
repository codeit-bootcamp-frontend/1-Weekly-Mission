import { StyledLink } from "./Footer.style.js";

function SNS({ alt, url, icon }) {
  const description = `${alt}페이지로 이동`;
  return (
    <StyledLink to={url}>
      <img src={icon} alt={description} />
    </StyledLink>
  );
}

export default SNS;
