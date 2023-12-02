import { ImgLogo } from "@/components/Nav/Avatar/Logo.styled";
import Link from "next/link";

const grid = {
  gridArea: "logo",
};

export default function Logo({ src = "", alt = "" }) {
  return (
    <Link style={grid} href="/">
      <ImgLogo src={src} alt={alt} />
    </Link>
  );
}
