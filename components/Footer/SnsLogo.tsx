import Image from "next/image";
import Link from "next/link";

interface Props {
  brand: string[];
}

const SnsLogo = ({ brand }: Props) => {
  return (
    <Link
      href={`https://www.${brand[0]}.com/`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={brand[1]}
        alt={`${brand[0]} 홈페이지로 연결된 ${brand[0]} 로고`}
      />
    </Link>
  );
};

export default SnsLogo;
