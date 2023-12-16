import Image from 'next/image';
import { Links } from './Footer.style';

interface SocialLinksProps extends SocialMediaLink {
  alt: string | undefined;
}

function SocialLinks({ alt, url, icon }: SocialLinksProps) {
  const description = `${alt}페이지로 이동`;

  return (
    <Links href={url}>
      <Image src={icon} alt={description} width={20} height={20} />
    </Links>
  );
}

export default SocialLinks;
