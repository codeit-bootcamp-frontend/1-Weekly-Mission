import Image from "next/image";
import { Links } from "./Footer.style";
import { Data } from './SocialMedia';

interface Props extends Data {
  alt : string | undefined;
}

function SNS({ alt, url, icon } : Props ) {
  const description = `${alt}페이지로 이동`;

  return (
    <Links href={url}>
      <Image src={icon} alt={description} width={20} height={20}/>
    </Links>
  );
}

export default SNS;
