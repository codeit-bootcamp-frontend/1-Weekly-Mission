import React, { useState } from "react";
import styled from "styled-components";
import { MouseEvent } from "react";
import { Modalkebab } from "../components/modal/Modal";

import kebab from "../images/kebab.svg";

import Image from "next/image";

import { PopAddProps, PopDeleteProps } from "@/type";

export const ModalInfo = [
  {
    title: "폴더에 추가",
    input: "내용 입력",
    color: "blue",
    buttonTitle: "추가하기",
  },

  { title: "링크 삭제", color: "red", buttonTitle: "삭제하기" },
];

const KebabImg = styled.span`
  position: relative;
  width: 22px;
  height: 17px;
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

const PopAdd = styled.button<PopAddProps>`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: ${({ $Selected }) => ($Selected ? "#6D6AFE" : "#ffffff")};
`;
const PopDelete = styled.button<PopDeleteProps>`
  display: flex;
  padding: 7px 12px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
  background-color: ${({ $isSelected }) =>
    $isSelected ? "#6D6AFE" : "#ffffff"};
`;

interface KebabButtonProps {
  url: string;
  openMAF: (e: React.MouseEvent<HTMLButtonElement>, url: string) => void;
}

export default function KebabButton({ url, openMAF }: KebabButtonProps) {
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState("");
  const toggledKebab = (e: MouseEvent) => {
    e.preventDefault();
    setOpen((prev) => !prev);
  };

  const togglePop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicked(e.currentTarget.innerText);
  };
  const handleOpenMAF = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsClicked(e.currentTarget.innerText);
    openMAF(e, url);
  };

  const handlecloseModal = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();
    setIsClicked("");
  };

  return (
    <>
      <KebabImg onClick={toggledKebab}>
        <Image fill src={kebab} alt="케밥" />
      </KebabImg>
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
