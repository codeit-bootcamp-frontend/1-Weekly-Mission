import { ImgLogo } from "@/components/Nav/Logo.styled";
import Link from "next/link";

const grid = {
  gridArea: "logo",
};

function Logo({ src = "", alt = "" }) {
  return (
    <Link style={grid} href="/">
      <ImgLogo src={src} alt={alt} />
    </Link>
  );
}

export default Logo;
