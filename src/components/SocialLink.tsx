import Link from "next/link";
import Image from "next/image";

interface SocailLinkProp {
  href: string;
  iconUrl: string;
  description: string;
}

function SocialLink({
  link: { href, iconUrl, description },
}: {
  link: SocailLinkProp;
}) {
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image src={iconUrl} alt={description} />
    </Link>
  );
}
export default SocialLink;
