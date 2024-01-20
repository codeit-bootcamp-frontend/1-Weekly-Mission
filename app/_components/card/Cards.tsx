import { LinkType } from "@/types/type";
import Card from "./Card";

interface Props {
  type: "shared" | "folder";
  data?: LinkType[];
}

const Cards = ({ type, data }: Props) => {
  return (
    <ul className="mx-auto grid gap-20 pt-32 tablet:auto-rows-fr tablet:grid-cols-2 tablet:gap-25 tablet:pt-40 pc:grid-cols-3 pc:gap-x-20 pc:pt-40">
      {data?.map((link) => (
        <li key={link.id}>
          <Card type={type} data={link} />
        </li>
      ))}
    </ul>
  );
};

export default Cards;
