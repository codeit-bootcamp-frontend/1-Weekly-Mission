import { DeleteModalItem } from "@/pages/folder";
import { OptionMenuContainer } from "./cardStyled";

interface CardOptionMenuProps {
  onClickDelete: (modalType: string, content: DeleteModalItem) => void;
  onClickAdd: (content: string) => void;
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
  const handleDelteButton = () => {
    onClickDelete("linkDelete", content);
  };

  return (
    <OptionMenuContainer>
      <div className="optionMenuItem" onClick={() => handleDelteButton()}>
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
