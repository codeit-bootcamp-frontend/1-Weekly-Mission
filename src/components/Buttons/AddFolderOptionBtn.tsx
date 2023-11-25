import styled from "styled-components";
import getFolderTagListData from "../../utils/getFolderTagListData";
import { useEffect, useState } from "react";
import AddLinkToFolder from "../../modals/contents/AddLinkToFolder";
import DeleteLink from "../../modals/contents/DeleteLink";
import { IFolderTagData } from "../../utils/types/common.types";

const OptionBtnStyle = styled.button`
  width: 100px;
  padding: 7px 12px;
  color: #333236;
  border: none;
  background: #fff;
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  &:active {
    background: #e7effb;
    color: #6d6afe;
  }
`;

const OptionBtnContainer = styled.div<{ isActive: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 2px;
  position: absolute;
  bottom: 6px;
  left: 108px;
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};
`;

export interface IAddFolderOptionBtnProps {
  options: string[];
  isFloatingBtnActive: boolean;
}

function AddFolderOptionBtn({
  options,
  isFloatingBtnActive = false,
}: IAddFolderOptionBtnProps) {
  const [isDeleteOpen, setDeleteOpen] = useState<boolean>(false);
  const [isAddLinkOpen, setAddLinkOpen] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(isFloatingBtnActive);
  const handleClick = (selectedOption: string) => {
    if (selectedOption === "삭제하기") setDeleteOpen(true);
    else if (selectedOption === "폴더에 추가") setAddLinkOpen(true);
    setIsActive(false);
  };
  const changeDeleteOpenState = (openState: boolean) =>
    setDeleteOpen(openState);
  const changeAddLinkOpenState = (openState: boolean) =>
    setAddLinkOpen(openState);
  const TagDataList: IFolderTagData[] = getFolderTagListData();

  useEffect(() => {
    setIsActive((prev) => !prev);
  }, [isFloatingBtnActive]);

  return (
    <div>
      <OptionBtnContainer isActive={isActive}>
        {options &&
          options.map((optionText) => (
            <OptionBtnStyle onClick={() => handleClick(optionText)}>
              {optionText}
            </OptionBtnStyle>
          ))}
      </OptionBtnContainer>
      <DeleteLink
        isOpen={isDeleteOpen} // options[0]: "삭제하기"
        changeOpenState={changeDeleteOpenState}
        link=""
      />
      <AddLinkToFolder
        isOpen={isAddLinkOpen} // options[1]: "폴더에 추가"
        changeOpenState={changeAddLinkOpenState}
        TagListData={TagDataList}
      />
    </div>
  );
}
export default AddFolderOptionBtn;
