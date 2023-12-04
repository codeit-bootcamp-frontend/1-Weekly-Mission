import { OptionMenuContainer } from "./cardStyled";

interface CardOptionMenuProps {
  onClickDelete: any;
  onClickAdd: any;
  content: {
    id: number;
    title: string;
  };
}

const CardOptionMenu = ({
  onClickDelete,
  onClickAdd,
  content,
}: CardOptionMenuProps) => {
  return (
    <OptionMenuContainer>
      <div
        className="optionMenuItem"
        onClick={() => onClickDelete("linkDelete", content)}
      >
        삭제하기
      </div>
      <div className="optionMenuItem" onClick={() => onClickAdd()}>
        폴더에 추가
      </div>
    </OptionMenuContainer>
  );
};

export default CardOptionMenu;
