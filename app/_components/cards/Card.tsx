import Image from "next/image";
import { reduceText } from "@/utils/reduceText";
import { LinkType } from "@/types/type";

const DEFAULT_CARD = {
  title: "",
  description: "",
  create_at: "",
  url: "",
  imageSrc: "/images/default-link.svg",
};
1;

interface Props {
  type: "shared" | "folder";
  data?: LinkType;
}

const Card = ({ type, data }: Props) => {
  const title = reduceText(data?.title, 10) ?? DEFAULT_CARD.title;
  const description = reduceText(data?.description, 100) ?? DEFAULT_CARD.description;
  const createdDate = new Date(data?.created_at ?? DEFAULT_CARD.create_at);
  const url = data?.url ?? DEFAULT_CARD.url;
  const imageSrc = data?.image_source ?? DEFAULT_CARD.imageSrc;

  return (
    <a href={url} target="_blank" rel="noreferrer noopener" className="block h-full max-h-340 w-full min-w-300 max-w-340 rounded-lg bg-white shadow-md">
      <div className="relative h-225 w-full overflow-hidden rounded-t-lg">
        <Image src={imageSrc} alt="링크 이미지" fill className="object-cover hover:scale-125 hover:duration-700" />
      </div>
      <div className="gap-10 px-20 py-15">
        <p className="mb-5 text-12 text-gray-100">{createdDate.toLocaleDateString("ko")}</p>
        <p className="mb-3 text-16">{title}</p>
        <p className="text-12">{description}</p>
      </div>
    </a>
  );
};

export default Card;
