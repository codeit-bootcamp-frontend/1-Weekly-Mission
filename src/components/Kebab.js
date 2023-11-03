import styled from "styled-components";
import { useState } from "react";
import kebab from "../images/kebab.svg";
import { Modalkebab } from "./Modal";
export const ModalInfo = [
  {
    title: "폴더에 추가",
    input: "내용 입력",
    color: "blue",
    buttonTitle: "추가하기",
  },

  { title: "링크 삭제", color: "red", buttonTitle: "삭제하기" },
];

const KebabImg = styled.img`
  position: relative;
`;
const Pop = styled.div`
  position: absolute;
  top: 20px;
  right: 0px;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const PopAdd = styled.button`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: ${({ $Selected }) => ($Selected ? "#6D6AFE" : "#ffffff")};
`;
const PopDelete = styled(PopAdd)`
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#6D6AFE" : "#ffffff"};
`;

export default function KebabButton({ url, openMAF }) {
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState("");
  const toggledKebab = (e) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  const togglePop = (e) => {
    e.preventDefault();
    setIsClicked(e.target.innerText);
  };
  const handleOpenMAF = (e) => {
    e.preventDefault();
    setIsClicked(e.target.innerText);
    openMAF(e);
  };

  const handlecloseModal = (e) => {
    e.preventDefault();
    setIsClicked("");
  };

  return (
    <>
      <KebabImg src={kebab} alt="케밥" onClick={toggledKebab} />
      {open && (
        <Pop>
          <PopDelete
            value={isClicked}
            onClick={togglePop}
            $isSelected={isClicked === "삭제하기"} // "삭제하기" 여기에 ModalDelte.value 넣으면 작동안함
          >
            삭제하기
          </PopDelete>
          <PopAdd
            value={isClicked}
            onClick={handleOpenMAF}
            $Selected={isClicked === "폴더에 추가"}
          >
            폴더에 추가
          </PopAdd>
        </Pop>
      )}
      {isClicked === "삭제하기" ? (
        <Modalkebab {...ModalInfo[1]} url={url} onClose={handlecloseModal} />
      ) : (
        ""
      )}

      {isClicked === "" ? "" : ""}
    </>
  );
}
