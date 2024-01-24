import { LinkType } from "@/types/type";
import Card from "./Card";

interface Props {
  type: "shared" | "folder";
  data?: LinkType[];
}

const Cards = ({ type, data }: Props) => {
  const isEmpty = data?.length === 0;

  return (
    <>
      {isEmpty ? (
        <div className="flex h-480 w-full justify-center pt-55 text-16 text-gray-100">폴더가 비어 있습니다.</div>
      ) : (
        <ul className="mx-auto grid min-h-480 w-fit min-w-340 gap-20 pt-32 tablet:auto-rows-fr tablet:grid-cols-2 tablet:gap-25 tablet:pt-40 pc:grid-cols-3 pc:gap-x-20">
          {data?.map((link) => (
            <li key={link.id}>
              <Card type={type} data={link} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Cards;
