import { OptionMenuContainer } from "./cardStyled";

interface CardOptionMenuProps {
  onClickDelete: any;
  onClickAdd: any;
  content: {
    id: number;
    title: string;
  };
  link: string;
}

const CardOptionMenu = ({
  onClickDelete,
  onClickAdd,
  content,
  link,
}: CardOptionMenuProps) => {
  return (
    <OptionMenuContainer>
      <div
        className="optionMenuItem"
        onClick={() => onClickDelete("linkDelete", content)}
      >
        삭제하기
      </div>
      <div
        className="optionMenuItem"
        onClick={() => {
          onClickAdd(link);
        }}
      >
        폴더에 추가
      </div>
    </OptionMenuContainer>
  );
};

export default CardOptionMenu;
