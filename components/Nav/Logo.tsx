import { Link } from "react-router-dom";
import { ImgLogo } from "src/components/Nav/Logo.styled";

const grid = {
  gridArea: "logo",
};

function Logo({ src = "", alt = "" }) {
  return (
    <Link style={grid} to="/">
      <ImgLogo src={src} alt={alt} />
    </Link>
  );
}

export default Logo;
